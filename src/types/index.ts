export interface Disciplina {
  ordem: number;
  id: string;
  codigo: string;
  moduloId: number;
  modulo: string;
  titulo: string;
  subtitulo: string;
  cargaHoraria: number;
  paginas?: string;
  pdfArquivo?: string;
  audiobookId?: string;
  youtubeIdPadrao?: string;
  descricao: string;
}

export interface Modulo {
  id: number;
  nome: string;
  descricao: string;
  cor: string;
  badge: string;
}

export interface Questao {
  id: number;
  tipo: 'certo_errado' | 'multipla_escolha';
  enunciado: string;
  respostaCorreta: string | number;
  explicacao: string;
  opcoes?: string[];
}

export interface Prova {
  id: string;
  titulo: string;
  tipo: 'p1' | 'p2';
  codigo: string;
  duracaoMinutos: number;
  questoes: Questao[];
}

export interface ProvaDisciplina {
  id: string;
  ordem: number;
  codigo: string;
  moduloId: number;
  modulo: string;
  titulo: string;
  subtitulo: string;
  cargaHoraria: number;
  descricao: string;
  duracaoMinutos: number;
  prova1: Prova;
  prova2: Prova;
}

export interface HistoricoItem {
  id: string;
  ordem: number;
  codigo: string;
  disciplina: string;
  modulo: string;
  cargaHoraria: number;
  nota: number | null;
  acertos: string;
  situacao: string;
  dataConclusao: string;
  frequencia: string;
}

export interface AvaliacaoAluno {
  id: number;
  nome: string;
  email: string;
  turma: string;
  media: number;
  avaliacoes: Array<{
    testeId: string;
    testeTitulo: string;
    nota: number | null;
    status: string;
    feedback: string;
    data: string;
  }>;
}

export interface ProgressoDisciplina {
  pdf: boolean;
  audio: boolean;
  video: boolean;
  liberada: boolean;
}

export interface NotasDisciplina {
  p1?: { nota: number; acertos: number; total: number; data: string; gabarito: Questao[] };
  p2?: { nota: number; acertos: number; total: number; data: string; gabarito: Questao[] };
  mediaFinal?: number | null;
  situacaoFinal?: string;
}

export interface Tentativa {
  data: string;
  nota: number;
  acertos: number;
}

export interface Usuario {
  id: string;
  nome: string;
  email: string;
  role: 'aluno' | 'professor' | 'superadmin';
  matricula?: string;
  nomeCompleto?: string;
  telefone?: string;
  dataNascimento?: string;
  turma?: string;
}

export interface AuthState {
  usuario: Usuario | null;
  carregandoAuth: boolean;
  pagamentoConfirmado: boolean;
  assinaturas: {
    coordenador: string;
    secretaria: string;
  } | null;
}

export interface ResultadoProva {
  disciplinaId: string;
  disciplinaTitulo: string;
  codigo: string;
  tipoProva: 'p1' | 'p2';
  tituloProva: string;
  nota: number;
  acertos: number;
  total: number;
  percentual: number;
  data: string;
  situacao: string;
  gabarito: Array<Questao & { respostaDada: string | number | undefined; acertou: boolean }>;
}