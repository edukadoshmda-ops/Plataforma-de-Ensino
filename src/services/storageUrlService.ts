// src/services/storageUrlService.ts
/**
 * Provedor inteligente de URLs para mídias pesadas (PDFs e Áudios).
 * 
 * Se VITE_STORAGE_BASE_URL estiver configurado no .env ou nas variáveis da Vercel:
 * Ex: https://hijdcrelisfmhkbtodyl.supabase.co/storage/v1/object/public/materiais
 * ou URL do Cloudflare R2 / AWS S3 / CDN própria,
 * os links apontarão diretamente para o armazenamento externo sem consumir
 * a cota de 100 GB da Vercel.
 * 
 * Se NÃO estiver configurado, faz fallback automático para os arquivos locais (/pdfs e /audio).
 */

const STORAGE_BASE_URL = (import.meta.env.VITE_STORAGE_BASE_URL || "").trim().replace(/\/+$/, "");

/**
 * Retorna a URL completa para visualização ou download de um PDF oficial.
 */
export function getPdfUrl(pdfFilenameOrPath: string): string {
  if (!pdfFilenameOrPath) return "";
  if (pdfFilenameOrPath.startsWith("http://") || pdfFilenameOrPath.startsWith("https://")) {
    return pdfFilenameOrPath;
  }

  // Remove caminhos relativos para isolar o nome do arquivo
  const cleanFilename = pdfFilenameOrPath.replace(/^\/?(pdfs\/)?/, "");

  if (STORAGE_BASE_URL) {
    return `${STORAGE_BASE_URL}/pdfs/${cleanFilename}`;
  }

  return `/pdfs/${cleanFilename}`;
}

// Arquivos que ultrapassam o limite de 50MB do plano gratuito do Supabase
// e continuam servidos localmente com total estabilidade.
const LOCAL_ONLY_FILES = new Set([
  "sintese_at_feminino.mp3",
  "sintese_at_masculino.mp3",
]);

/**
 * Retorna a URL completa para reprodução ou download de um Audiobook oficial (MP3).
 */
export function getAudioUrl(audioFilenameOrPath: string): string {
  if (!audioFilenameOrPath) return "";
  if (audioFilenameOrPath.startsWith("http://") || audioFilenameOrPath.startsWith("https://")) {
    return audioFilenameOrPath;
  }

  // Remove caminhos relativos para isolar o nome do arquivo
  const cleanFilename = audioFilenameOrPath.replace(/^\/?(audio\/)?/, "");

  if (STORAGE_BASE_URL && !LOCAL_ONLY_FILES.has(cleanFilename)) {
    return `${STORAGE_BASE_URL}/audio/${cleanFilename}`;
  }

  return `/audio/${cleanFilename}`;
}

/**
 * Indica se a aplicação está usando armazenamento em nuvem externa ou local.
 */
export function isUsingCloudStorage(): boolean {
  return Boolean(STORAGE_BASE_URL);
}

export function getStorageBaseUrl(): string {
  return STORAGE_BASE_URL;
}
