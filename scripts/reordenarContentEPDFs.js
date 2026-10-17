
import fs from "fs";
import { GRADE_CURRICULAR, MODULOS_SEBITAN } from "../src/data/gradeCurricular.js";
import { apostilasTextoCompleto } from "../src/data/apostilasTextoCompleto.js";

const apostilasReordenadas = GRADE_CURRICULAR.map((g, idx) => {
  const filename = g.pdfArquivo.replace("/pdfs/", "");
  const antiga = apostilasTextoCompleto.find(a => a.pdfFilename === filename) || {};
  return {
    ...antiga,
    id: idx + 1,
    disciplinaId: g.id,
    codigo: g.codigo,
    moduloId: g.moduloId,
    titulo: g.titulo,
    modulo: g.modulo,
    pdfFilename: filename,
    youtubeIdPadrao: g.youtubeIdPadrao
  };
});

fs.writeFileSync(
  "./src/data/apostilasTextoCompleto.js",
  "// Banco de Textos Integrais de Todas as Apostilas do SEBITAN\n// Reordenado conforme a Grade Curricular Oficial (1 a 30)\n\nexport const apostilasTextoCompleto = " +
    JSON.stringify(apostilasReordenadas, null, 2) +
    ";\n",
  "utf8"
);
console.log("apostilasTextoCompleto.js reordenado com sucesso!");

const pdfsReordenados = GRADE_CURRICULAR.map((g, idx) => {
  return {
    id: idx + 1,
    disciplinaId: g.id,
    codigo: g.codigo,
    moduloId: g.moduloId,
    titulo: g.titulo,
    modulo: g.modulo,
    descricao: g.descricao,
    arquivo: g.pdfArquivo,
    paginas: g.paginas,
    autor: "SEBITAN Acadêmico",
    youtubeIdPadrao: g.youtubeIdPadrao
  };
});

const contentJsCode = "// src/data/content.js\n" +
  "// Acervo Bibliográfico e Multimídia Oficial do SEBITAN\n" +
  "import { GRADE_CURRICULAR, MODULOS_SEBITAN } from \"./gradeCurricular.js\";\n\n" +
  "export { GRADE_CURRICULAR, MODULOS_SEBITAN };\n\n" +
  "export const pdfs = " + JSON.stringify(pdfsReordenados, null, 2) + ";\n\n" +
  "export const audiobooks = pdfs.map((p) => ({\n" +
  "  id: p.id,\n" +
  "  disciplinaId: p.disciplinaId,\n" +
  "  titulo: p.titulo,\n" +
  "  modulo: p.modulo,\n" +
  "  moduloId: p.moduloId,\n" +
  "  duracao: \"45 min\",\n" +
  "  arquivo: p.arquivo,\n" +
  "  descricao: p.descricao,\n" +
  "  narrador: \"SEBITAN Voz Oficial\",\n" +
  "}));\n\n" +
  "export const videos = pdfs.map((p) => ({\n" +
  "  id: p.id,\n" +
  "  disciplinaId: p.disciplinaId,\n" +
  "  titulo: \"Aula Oficial: \" + p.titulo,\n" +
  "  modulo: p.modulo,\n" +
  "  moduloId: p.moduloId,\n" +
  "  duracao: \"35 min\",\n" +
  "  youtubeId: p.youtubeIdPadrao || \"n2RNcPRt6cc\",\n" +
  "  descricao: p.descricao,\n" +
  "}));\n\n" +
  "export const artigos = [\n" +
  "  {\n" +
  "    id: 1,\n" +
  "    titulo: \"A Importância da Teologia Sistemática na Vida Pastoral\",\n" +
  "    autor: \"Corpo Docente SEBITAN\",\n" +
  "    data: \"15/09/2026\",\n" +
  "    conteudo: \"A teologia sistemática não é mero exercício intelectual, mas o alicerce pelo qual o pastor defende a sã doutrina e pastoreia as almas com discernimento bíblico.\",\n" +
  "  }\n" +
  "];\n\n" +
  "export const testes = pdfs.map((p) => ({\n" +
  "  id: p.id,\n" +
  "  disciplinaId: p.disciplinaId,\n" +
  "  titulo: \"Avaliação: \" + p.titulo,\n" +
  "  questoes: 20,\n" +
  "}));\n\n" +
  "export const alunosAvaliacoesIniciais = [];\n";

fs.writeFileSync("./src/data/content.js", contentJsCode, "utf8");
console.log("content.js reordenado com sucesso!");
