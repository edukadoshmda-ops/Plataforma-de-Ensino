// scripts/upload_to_supabase_storage.mjs
/**
 * Script utilitário para envio automático de PDFs e Áudios para o Supabase Storage.
 * 
 * Como usar:
 *   node scripts/upload_to_supabase_storage.mjs <SUPABASE_SERVICE_ROLE_KEY>
 * ou defina a variável de ambiente:
 *   $env:SUPABASE_SERVICE_ROLE_KEY="sua_chave_service_role"
 *   node scripts/upload_to_supabase_storage.mjs
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { createClient } from "@supabase/supabase-js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, "..");

const SUPABASE_URL = process.env.VITE_SUPABASE_URL || "https://hijdcrelisfmhkbtodyl.supabase.co";
const SERVICE_ROLE_KEY = process.argv[2] || process.env.SUPABASE_SERVICE_ROLE_KEY;
const BUCKET_NAME = process.env.SUPABASE_STORAGE_BUCKET || "materiais";

console.log("=========================================================");
console.log("  SINCRONIZAÇÃO DE MÍDIAS -> SUPABASE STORAGE");
console.log("=========================================================\n");

if (!SERVICE_ROLE_KEY) {
  console.error("❌ ERRO: Chave 'service_role' não fornecida.");
  console.log("\nPara fazer upload de arquivos em massa para o Supabase Storage,");
  console.log("é necessário a chave 'service_role' do seu projeto Supabase.");
  console.log("\nOnde encontrar a chave:");
  console.log("  1. Acesse: https://supabase.com/dashboard/project/hijdcrelisfmhkbtodyl/settings/api");
  console.log("  2. Em 'Project API keys', copie a chave 'service_role' (secret).");
  console.log("\nEm seguida, execute no terminal:");
  console.log("  node scripts/upload_to_supabase_storage.mjs <SUA_CHAVE_SERVICE_ROLE>\n");
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY, {
  auth: { persistSession: false }
});

async function main() {
  console.log(`🔌 Conectando ao Supabase: ${SUPABASE_URL}`);

  // 1. Verificar ou Criar Bucket Público
  const { data: buckets, error: listErr } = await supabase.storage.listBuckets();
  if (listErr) {
    console.error("❌ Falha ao listar buckets:", listErr.message);
    process.exit(1);
  }

  const bucketExiste = buckets.some((b) => b.name === BUCKET_NAME);
  if (!bucketExiste) {
    console.log(`📦 Criando bucket público '${BUCKET_NAME}'...`);
    const { error: createErr } = await supabase.storage.createBucket(BUCKET_NAME, {
      public: true,
    });
    if (createErr) {
      console.error(`❌ Não foi possível criar o bucket '${BUCKET_NAME}':`, createErr.message);
      process.exit(1);
    }
    console.log(`✅ Bucket '${BUCKET_NAME}' criado com sucesso!\n`);
  } else {
    console.log(`✅ Bucket '${BUCKET_NAME}' já existe.\n`);
  }

  // 2. Coletar arquivos locais
  const pdfsDir = path.join(ROOT_DIR, "public", "pdfs");
  const audioDir = path.join(ROOT_DIR, "public", "audio");

  const pdfFiles = fs.existsSync(pdfsDir)
    ? fs.readdirSync(pdfsDir).filter((f) => f.endsWith(".pdf")).map((f) => ({
        localPath: path.join(pdfsDir, f),
        remotePath: `pdfs/${f}`,
        contentType: "application/pdf",
        tipo: "PDF"
      }))
    : [];

  const audioFiles = fs.existsSync(audioDir)
    ? fs.readdirSync(audioDir).filter((f) => f.endsWith(".mp3")).map((f) => ({
        localPath: path.join(audioDir, f),
        remotePath: `audio/${f}`,
        contentType: "audio/mpeg",
        tipo: "Áudio"
      }))
    : [];

  const totalArquivos = [...pdfFiles, ...audioFiles];
  console.log(`📊 Encontrados: ${pdfFiles.length} apostilas (PDF) e ${audioFiles.length} audiobooks (MP3). Total: ${totalArquivos.length} arquivos.`);
  console.log("Iniciando upload com upsert (arquivos idênticos serão atualizados com segurança)...\n");

  let sucesso = 0;
  let falhas = 0;

  for (let i = 0; i < totalArquivos.length; i++) {
    const item = totalArquivos[i];
    const progresso = `[${i + 1}/${totalArquivos.length}]`;
    const fileSizeMB = (fs.statSync(item.localPath).size / (1024 * 1024)).toFixed(2);

    process.stdout.write(`⏳ ${progresso} Enviando ${item.tipo} (${fileSizeMB} MB): ${item.remotePath}... `);

    try {
      const fileBuffer = fs.readFileSync(item.localPath);
      const { error: uploadError } = await supabase.storage
        .from(BUCKET_NAME)
        .upload(item.remotePath, fileBuffer, {
          contentType: item.contentType,
          upsert: true
        });

      if (uploadError) {
        console.log(`❌ ERRO: ${uploadError.message}`);
        falhas++;
      } else {
        console.log(`✅ OK`);
        sucesso++;
      }
    } catch (err) {
      console.log(`❌ EXCEÇÃO: ${err.message}`);
      falhas++;
    }
  }

  const publicUrlBase = `${SUPABASE_URL}/storage/v1/object/public/${BUCKET_NAME}`;

  console.log("\n=========================================================");
  console.log("  RELATÓRIO FINAL DE SINCRONIZAÇÃO");
  console.log("=========================================================");
  console.log(`  Arquivos enviados com sucesso: ${sucesso}`);
  console.log(`  Falhas: ${falhas}`);
  console.log(`  URL Pública Base do Storage:`);
  console.log(`  👉 ${publicUrlBase}`);
  console.log("\nPara ativar o carregamento em nuvem na Vercel e no .env, adicione:");
  console.log(`  VITE_STORAGE_BASE_URL=${publicUrlBase}\n`);
}

main().catch((err) => {
  console.error("Erro inesperado:", err);
  process.exit(1);
});
