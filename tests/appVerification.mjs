import fs from 'fs';
import path from 'path';

console.log('====================================================');
console.log('   BATERIA DE TESTES AUTOMATIZADOS - TEOLOGIA ACESSÍVEL');
console.log('====================================================\n');

let totalTestes = 0;
let aprovados = 0;
let falhas = 0;

function test(descricao, condicao) {
  totalTestes++;
  if (condicao) {
    aprovados++;
    console.log(`  [OK] ${descricao}`);
  } else {
    falhas++;
    console.error(`  [FALHA] ${descricao}`);
  }
}

// 1. ATIVOS ESTÁTICOS
console.log('1. Ativos Estáticos (public/)');
test('Logo oficial existe em public/logo-teologia.png', fs.existsSync('public/logo-teologia.png'));
test('Assinatura do Coordenador existe em public/assinatura-coordenador.png', fs.existsSync('public/assinatura-coordenador.png'));
test('Assinatura da Secretária existe em public/assinatura-secretaria.png', fs.existsSync('public/assinatura-secretaria.png'));

// 2. CURRÍCULO E CONTEÚDO
console.log('\n2. Conteúdo e Disciplinas');
const contentSrc = fs.readFileSync('src/data/content.ts', 'utf-8');
const gradeSrc = fs.readFileSync('src/data/gradeCurricular.ts', 'utf-8');

const countPdfs = (contentSrc.match(/"id":\s*\d+/g) || []).length;
test('Possui 30 PDFs curriculares catalogados', countPdfs === 30);

const countDisciplinas = (gradeSrc.match(/id:\s*"[a-zA-Z0-9_]+"/g) || []).length;
test('Possui 30 disciplinas na Grade Curricular', countDisciplinas >= 30);

// 3. BANCO DE QUESTÕES
console.log('\n3. Banco de Questões Avaliativas');
const provasM1 = fs.readFileSync('src/data/provas/modulo1.ts', 'utf-8');
const provasM2 = fs.readFileSync('src/data/provas/modulo2.ts', 'utf-8');
const provasM3 = fs.readFileSync('src/data/provas/modulo3.ts', 'utf-8');
const provasM4 = fs.readFileSync('src/data/provas/modulo4.ts', 'utf-8');
const provasM5 = fs.readFileSync('src/data/provas/modulo5.ts', 'utf-8');

const q1 = (provasM1.match(/"enunciado"\s*:/g) || []).length;
const q2 = (provasM2.match(/"enunciado"\s*:/g) || []).length;
const q3 = (provasM3.match(/"enunciado"\s*:/g) || []).length;
const q4 = (provasM4.match(/"enunciado"\s*:/g) || []).length;
const q5 = (provasM5.match(/"enunciado"\s*:/g) || []).length;
const totalQuestoes = q1 + q2 + q3 + q4 + q5;

test(`Módulo 1 possui questões (${q1} cadastradas)`, q1 > 0);
test(`Módulo 2 possui questões (${q2} cadastradas)`, q2 > 0);
test(`Módulo 3 possui questões (${q3} cadastradas)`, q3 > 0);
test(`Módulo 4 possui questões (${q4} cadastradas)`, q4 > 0);
test(`Módulo 5 possui questões (${q5} cadastradas)`, q5 > 0);
test(`Total de questões no acervo: ${totalQuestoes} (mínimo 300 esperado)`, totalQuestoes >= 300);

// 4. ROTAS DO SISTEMA
console.log('\n4. Rotas do Sistema (src/App.tsx)');
const appSrc = fs.readFileSync('src/App.tsx', 'utf-8');
const rotas = [
  '/', '/apresentacao', '/login', '/cadastro', '/matricula',
  '/pagamento', '/playbooks', '/audiobooks', '/videos', '/testes',
  '/tutor', '/dicionario', '/artigos', '/admin', '/verificar'
];
rotas.forEach(r => {
  const achou = appSrc.includes(`path="${r}"`) || appSrc.includes(`path="${r}/`);
  test(`Rota ${r} registrada`, achou);
});

// 5. DOCUMENTOS ACADÊMICOS E ASSINATURAS
console.log('\n5. Documentos Acadêmicos e Assinaturas');
const diplomaSrc = fs.readFileSync('src/components/DiplomaFaculdade.tsx', 'utf-8');
test('Diploma inclui assinatura do Coordenador', diplomaSrc.includes('assinatura-coordenador.png'));
test('Diploma inclui assinatura da Secretária', diplomaSrc.includes('assinatura-secretaria.png'));
test('Diploma possui texto ministerial solene aprovado', diplomaSrc.includes('fidelidade doutrinária') && diplomaSrc.includes('Bacharelado Livre em Teologia Bíblica e Prática Pastoral'));
test('Diploma possui cabeçalho de Instituição de Ensino Bíblico e Teológico & Ministério Pastoral', diplomaSrc.includes('INSTITUIÇÃO DE ENSINO BÍBLICO E TEOLÓGICO & MINISTÉRIO PASTORAL'));

const historicoSrc = fs.readFileSync('src/components/testes/HistoricoEscolar.tsx', 'utf-8');
test('Histórico possui assinaturas do Coordenador e Secretária', historicoSrc.includes('assinatura-coordenador.png') && historicoSrc.includes('assinatura-secretaria.png'));
test('Histórico possui bloco fechamento anti-corte', historicoSrc.includes('documento-fechamento-bloco'));

const credencialSrc = fs.readFileSync('src/components/CredencialTeologo.tsx', 'utf-8');
test('Credencial de Teólogo possui assinatura da Diretoria', credencialSrc.includes('assinatura-coordenador.png'));

// 6. SANITIZAÇÃO DE NOMES
console.log('\n6. Ausência de SEBITAN em Títulos Públicos');
test('Credencial limpa de SEBITAN no título', !credencialSrc.includes('TEOLOGIA ACESSÍVEL • SEBITAN'));
const dicSrc = fs.readFileSync('src/pages/DicionarioBiblia.tsx', 'utf-8');
test('Dicionário limpo de SEBITAN no comentário exegético', !dicSrc.includes('Comentário Exegético SEBITAN:'));
const verifSrc = fs.readFileSync('src/pages/VerificarCertificado.tsx', 'utf-8');
test('Validador limpo de SEBITAN na descrição', !verifSrc.includes('Secretaria Geral SEBITAN'));

// 7. COMPILAÇÃO E CSS
console.log('\n7. Regras de Impressão e Estilos (src/index.css)');
const cssSrc = fs.readFileSync('src/index.css', 'utf-8');
test('Regra de corte evitado para diploma (@media print)', cssSrc.includes('page-break-after: avoid') && cssSrc.includes('diploma-folha-a4-paisagem'));
test('Regra anti-corte no histórico escolar (@media print)', cssSrc.includes('body.print-somente-historico .documento-fechamento-bloco'));
test('Estilos do seletor de planos no CSS', cssSrc.includes('.pagamento-planos-seletor') && cssSrc.includes('.plano-card-destaque'));

// 8. MODELO DE 2 PLANOS E ÂNCORA DE PREÇO
console.log('\n8. Modelo de 2 Planos e Âncora de Preço');
const apresSrc = fs.readFileSync('src/pages/Apresentacao.tsx', 'utf-8');
test('Apresentação exibe Plano Digital Completo', apresSrc.includes('Formação Digital Completa'));
test('Apresentação exibe Plano Físico Ministerial', apresSrc.includes('Kit Físico Ministerial'));
test('Apresentação possui âncora De R$ 497,00 e De R$ 890,00', apresSrc.includes('De R$ 497,00') && apresSrc.includes('De R$ 890,00'));
test('Apresentação possui valores 12x R$ 14,99 e 12x R$ 29,70', apresSrc.includes('14,99') && apresSrc.includes('29,70'));

const pagSrc = fs.readFileSync('src/pages/Pagamento.tsx', 'utf-8');
test('Pagamento possui seletor interativo de planos', pagSrc.includes('planoSelecionado') && pagSrc.includes('PLANOS'));
test('Pagamento inclui formulário de endereço para entrega do kit físico', pagSrc.includes('Endereço de Envio do Kit Físico') && pagSrc.includes('viacep.com.br'));
test('Pagamento possui opção de PIX Direto com chave oficial', pagSrc.includes('Pagar com PIX Direto') && pagSrc.includes('CHAVE_PIX_PADRAO'));

const matSrc = fs.readFileSync('src/pages/Matricula.tsx', 'utf-8');
test('Matrícula gera código com prefixo oficial TA-', matSrc.includes('TA-${new Date().getFullYear()}'));
test('Matrícula possui seletor prévio de plano', matSrc.includes('pagamento-planos-seletor'));

// 9. ACESSO VITALÍCIO NAS PÁGINAS DE VENDA E CHECKOUT
console.log('\n9. Acesso Vitalício nas Páginas de Venda e Matrícula');
test('Apresentação destaca Acesso Vitalício na oferta', apresSrc.includes('Acesso Vitalício') && apresSrc.includes('ACESSO VITALÍCIO'));
test('Apresentação possui selos e cards de Acesso Vitalício', apresSrc.includes('plano-vitalicio-badge') && apresSrc.includes('Acesso Vitalício Garantido'));
test('Pagamento destaca Acesso Vitalício nos planos e resumo', pagSrc.includes('Acesso VITALÍCIO') && pagSrc.includes('Acesso Vitalício'));
test('Matrícula exibe opção de Acesso Vitalício', matSrc.includes('Acesso Vitalício'));

console.log('\n====================================================');
console.log(`TOTAL: ${aprovados} APROVADOS / ${falhas} FALHAS EM ${totalTestes} TESTES`);
console.log('====================================================\n');

if (falhas > 0) process.exit(1);
