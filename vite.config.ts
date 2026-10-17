import { defineConfig, Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { spawn } from 'node:child_process'
import crypto from 'node:crypto'
import fs from 'node:fs'
import path from 'node:path'

function edgeTtsPlugin(): Plugin {
  const cacheDir = path.resolve(__dirname, '.cache_tts')
  if (!fs.existsSync(cacheDir)) {
    fs.mkdirSync(cacheDir, { recursive: true })
  }

  const handler = async (req: any, res: any, next: any) => {
    if (!req.url || !req.url.startsWith('/api/tts')) {
      return next()
    }

    try {
      let text = ''
      let voice = 'pt-BR-AntonioNeural'
      let rate = '+0%'

      if (req.method === 'POST') {
        const body = await new Promise<string>((resolve, reject) => {
          let chunks = ''
          req.on('data', (c: any) => (chunks += c))
          req.on('end', () => resolve(chunks))
          req.on('error', reject)
        })
        try {
          const parsed = JSON.parse(body)
          text = parsed.text || ''
          voice = parsed.voice || voice
          rate = parsed.rate || rate
        } catch {
          // ignore json parse error
        }
      } else {
        const parsedUrl = new URL(req.url, 'http://localhost')
        text = parsedUrl.searchParams.get('text') || ''
        voice = parsedUrl.searchParams.get('voice') || voice
        rate = parsedUrl.searchParams.get('rate') || rate
      }

      if (!text.trim()) {
        res.statusCode = 400
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({ error: 'Text parameter is required' }))
        return
      }

      const hash = crypto.createHash('md5').update(`${voice}_${rate}_${text}`).digest('hex')
      const cachePath = path.join(cacheDir, `${hash}.mp3`)

      if (fs.existsSync(cachePath)) {
        const stat = fs.statSync(cachePath)
        res.writeHead(200, {
          'Content-Type': 'audio/mpeg',
          'Content-Length': stat.size,
          'Cache-Control': 'public, max-age=86400',
        })
        fs.createReadStream(cachePath).pipe(res)
        return
      }

      const pyExe = fs.existsSync('C:\\Python314\\python.exe')
        ? 'C:\\Python314\\python.exe'
        : 'python'
      const scriptPath = path.resolve(__dirname, 'scripts/tts_service.py')
      const tempPath = path.join(cacheDir, `${hash}.tmp.mp3`)

      const child = spawn(pyExe, [scriptPath, voice, rate, tempPath])
      child.stdin.write(text, 'utf-8')
      child.stdin.end()

      child.on('close', (code) => {
        if (code === 0 && fs.existsSync(tempPath)) {
          try {
            fs.renameSync(tempPath, cachePath)
            const stat = fs.statSync(cachePath)
            res.writeHead(200, {
              'Content-Type': 'audio/mpeg',
              'Content-Length': stat.size,
              'Cache-Control': 'public, max-age=86400',
            })
            fs.createReadStream(cachePath).pipe(res)
          } catch (e: any) {
            res.statusCode = 500
            res.end(JSON.stringify({ error: e.message }))
          }
        } else {
          try {
            if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath)
          } catch {}
          res.statusCode = 500
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ error: 'TTS synthesis failed' }))
        }
      })

      child.on('error', (err) => {
        res.statusCode = 500
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({ error: err.message }))
      })
    } catch (err: any) {
      res.statusCode = 500
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify({ error: err.message }))
    }
  }

  return {
    name: 'edge-tts-api',
    configureServer(server) {
      server.middlewares.use(handler)
    },
    configurePreviewServer(server) {
      server.middlewares.use(handler)
    },
  }
}

export default defineConfig({
  plugins: [react(), edgeTtsPlugin()],
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-ui': ['lucide-react'],
          'vendor-supabase': ['@supabase/supabase-js'],
        },
      },
    },
  },
})