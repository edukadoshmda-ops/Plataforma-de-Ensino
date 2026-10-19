-- ==============================================================================
-- SCHEMA OFICIAL SEBITAN SAAS — PLATAFORMA TEOLOGIA ACESSÍVEL
-- Dimensionado e Otimizado para mais de 5.000 Alunos Simultâneos
-- Backend: Supabase (PostgreSQL 15+ / Auth / Row Level Security / Índices B-Tree)
-- ==============================================================================

-- 1. Habilitar extensões necessárias
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- 2. Tabela de Perfis de Usuários (Integrada ao Supabase Auth)
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  nome_completo TEXT NOT NULL,
  telefone TEXT,
  data_nascimento DATE,
  role TEXT NOT NULL DEFAULT 'aluno' CHECK (role IN ('aluno', 'professor', 'tutor', 'admin', 'superadmin')),
  avatar_url TEXT,
  status_conta TEXT NOT NULL DEFAULT 'ativa' CHECK (status_conta IN ('ativa', 'suspensa', 'cancelada')),
  criado_em TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL,
  atualizado_em TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. Tabela de Matrículas Oficiais do Aluno
CREATE TABLE IF NOT EXISTS public.matriculas (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  numero_matricula TEXT UNIQUE NOT NULL,
  curso_nome TEXT NOT NULL DEFAULT 'Teologia Acessível - Formação Livre Ministerial SEBITAN',
  status_pagamento TEXT NOT NULL DEFAULT 'pendente' CHECK (status_pagamento IN ('pendente', 'pago', 'recusado', 'reembolsado')),
  valor_centavos INTEGER NOT NULL DEFAULT 17988,
  metodo_pagamento TEXT DEFAULT 'ASAAS',
  transacao_id TEXT,
  data_confirmacao TIMESTAMPTZ,
  criado_em TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL,
  atualizado_em TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 4. Tabela de Progresso do Aluno nas Disciplinas
CREATE TABLE IF NOT EXISTS public.progresso_disciplinas (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  disciplina_id TEXT NOT NULL,
  modulo TEXT NOT NULL,
  percentual_leitura INTEGER DEFAULT 0 CHECK (percentual_leitura >= 0 AND percentual_leitura <= 100),
  audio_ouvido BOOLEAN DEFAULT false,
  videos_assistidos BOOLEAN DEFAULT false,
  concluida BOOLEAN DEFAULT false,
  ultimo_acesso TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL,
  UNIQUE(user_id, disciplina_id)
);

-- 5. Tabela de Avaliações e Tentativas de Provas Oficiais (30 Disciplinas / 300 Questões)
CREATE TABLE IF NOT EXISTS public.avaliacoes_provas (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  disciplina_id TEXT NOT NULL,
  titulo_disciplina TEXT NOT NULL,
  nota NUMERIC(4, 2) NOT NULL CHECK (nota >= 0 AND nota <= 10),
  acertos INTEGER NOT NULL,
  total_questoes INTEGER NOT NULL DEFAULT 10,
  situacao TEXT NOT NULL CHECK (situacao IN ('Aprovado', 'Reprovado')),
  respostas_detalhadas JSONB DEFAULT '[]'::jsonb,
  duracao_segundos INTEGER DEFAULT 0,
  realizado_em TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 6. Tabela de Histórico Escolar Oficial SEBITAN (Consolidação Acadêmica)
CREATE TABLE IF NOT EXISTS public.historico_escolar (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  disciplina_id TEXT NOT NULL,
  codigo TEXT NOT NULL,
  disciplina TEXT NOT NULL,
  modulo TEXT NOT NULL,
  carga_horaria INTEGER NOT NULL DEFAULT 60,
  nota NUMERIC(4, 2),
  acertos TEXT DEFAULT '-',
  frequencia TEXT DEFAULT '100%',
  situacao TEXT NOT NULL DEFAULT 'A Cursar' CHECK (situacao IN ('A Cursar', 'Em Andamento', 'Aprovado', 'Reprovado')),
  data_conclusao DATE,
  atualizado_em TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL,
  UNIQUE(user_id, disciplina_id)
);

-- 7. Tabela de Certificados Oficiais Emitidos
CREATE TABLE IF NOT EXISTS public.certificados (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  matricula_id UUID REFERENCES public.matriculas(id),
  numero_registro TEXT UNIQUE NOT NULL,
  codigo_autenticacao TEXT UNIQUE NOT NULL,
  media_geral NUMERIC(4, 2) NOT NULL,
  carga_horaria_total INTEGER NOT NULL DEFAULT 1800,
  dados_aluno JSONB NOT NULL,
  status TEXT NOT NULL DEFAULT 'valido' CHECK (status IN ('valido', 'revogado')),
  data_emissao TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 8. Tabela de Consultas e Dúvidas com o Tutor IA SEBITAN
CREATE TABLE IF NOT EXISTS public.tutor_conversas (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  pergunta TEXT NOT NULL,
  resposta TEXT NOT NULL,
  fontes JSONB DEFAULT '[]'::jsonb,
  modo TEXT DEFAULT 'Motor Especialista SEBITAN',
  criado_em TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 9. Videoaulas personalizadas compartilhadas por toda a plataforma
CREATE TABLE IF NOT EXISTS public.videoaulas_personalizadas (
  disciplina_id TEXT PRIMARY KEY,
  youtube_id TEXT NOT NULL CHECK (youtube_id ~ '^[A-Za-z0-9_-]{11}$'),
  titulo_canal TEXT,
  duracao TEXT,
  atualizado_em TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- ==============================================================================
-- ÍNDICES B-TREE DE ALTA PERFORMANCE (ESCALA PARA 5.000+ ALUNOS)
-- ==============================================================================
CREATE INDEX IF NOT EXISTS idx_profiles_email ON public.profiles (email);
CREATE INDEX IF NOT EXISTS idx_profiles_role ON public.profiles (role);

CREATE INDEX IF NOT EXISTS idx_matriculas_user_status ON public.matriculas (user_id, status_pagamento);
CREATE INDEX IF NOT EXISTS idx_matriculas_numero ON public.matriculas (numero_matricula);

CREATE INDEX IF NOT EXISTS idx_progresso_user_disc ON public.progresso_disciplinas (user_id, disciplina_id);
CREATE INDEX IF NOT EXISTS idx_progresso_concluida ON public.progresso_disciplinas (user_id, concluida);

CREATE INDEX IF NOT EXISTS idx_avaliacoes_user_disc ON public.avaliacoes_provas (user_id, disciplina_id);
CREATE INDEX IF NOT EXISTS idx_avaliacoes_data ON public.avaliacoes_provas (realizado_em DESC);

CREATE INDEX IF NOT EXISTS idx_historico_user_disc ON public.historico_escolar (user_id, disciplina_id);
CREATE INDEX IF NOT EXISTS idx_historico_situacao ON public.historico_escolar (user_id, situacao);

CREATE INDEX IF NOT EXISTS idx_certificados_auth ON public.certificados (codigo_autenticacao);
CREATE INDEX IF NOT EXISTS idx_certificados_user ON public.certificados (user_id);

CREATE INDEX IF NOT EXISTS idx_tutor_user_data ON public.tutor_conversas (user_id, criado_em DESC);

-- Videoaulas: leitura pública; somente equipe autorizada altera os links.
ALTER TABLE public.videoaulas_personalizadas ENABLE ROW LEVEL SECURITY;
GRANT SELECT ON public.videoaulas_personalizadas TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON public.videoaulas_personalizadas TO authenticated;

DROP POLICY IF EXISTS "Videoaulas visíveis a todos" ON public.videoaulas_personalizadas;
CREATE POLICY "Videoaulas visíveis a todos" ON public.videoaulas_personalizadas
  FOR SELECT USING (true);

-- ==============================================================================
-- POLÍTICAS RLS (ROW LEVEL SECURITY)
-- ==============================================================================
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.matriculas ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.progresso_disciplinas ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.avaliacoes_provas ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.historico_escolar ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.certificados ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tutor_conversas ENABLE ROW LEVEL SECURITY;

-- Regra: Superadmin, Admin e Professores têm acesso total
CREATE OR REPLACE FUNCTION public.is_admin_ou_professor()
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM public.profiles
    WHERE id = auth.uid() AND role IN ('superadmin', 'admin', 'professor', 'tutor')
  ) OR lower(coalesce(auth.jwt() ->> 'email', '')) = 'edukadoshmda@gmail.com';
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP POLICY IF EXISTS "Equipe pode inserir videoaulas" ON public.videoaulas_personalizadas;
CREATE POLICY "Equipe pode inserir videoaulas" ON public.videoaulas_personalizadas
  FOR INSERT WITH CHECK (public.is_admin_ou_professor());

DROP POLICY IF EXISTS "Equipe pode atualizar videoaulas" ON public.videoaulas_personalizadas;
CREATE POLICY "Equipe pode atualizar videoaulas" ON public.videoaulas_personalizadas
  FOR UPDATE USING (public.is_admin_ou_professor())
  WITH CHECK (public.is_admin_ou_professor());

DROP POLICY IF EXISTS "Equipe pode excluir videoaulas" ON public.videoaulas_personalizadas;
CREATE POLICY "Equipe pode excluir videoaulas" ON public.videoaulas_personalizadas
  FOR DELETE USING (public.is_admin_ou_professor());

-- Profiles: Aluno lê e atualiza seu próprio perfil; Admin lê todos
DROP POLICY IF EXISTS "Aluno pode ver próprio perfil" ON public.profiles;
CREATE POLICY "Aluno pode ver próprio perfil" ON public.profiles
  FOR SELECT USING (auth.uid() = id OR public.is_admin_ou_professor());

DROP POLICY IF EXISTS "Aluno pode atualizar próprio perfil" ON public.profiles;
CREATE POLICY "Aluno pode atualizar próprio perfil" ON public.profiles
  FOR UPDATE USING (auth.uid() = id);

DROP POLICY IF EXISTS "Inserção de perfil autenticado" ON public.profiles;
CREATE POLICY "Inserção de perfil autenticado" ON public.profiles
  FOR INSERT WITH CHECK (auth.uid() = id OR public.is_admin_ou_professor());

-- Matrículas: aluno consulta e cria a própria matrícula.
-- A mudança para "pago", "recusado" ou "reembolsado" deve vir do webhook
-- do Asaas usando uma função/backend confiável, nunca do navegador.
DROP POLICY IF EXISTS "Ver próprias matrículas" ON public.matriculas;
CREATE POLICY "Ver próprias matrículas" ON public.matriculas
  FOR SELECT USING (auth.uid() = user_id OR public.is_admin_ou_professor());

DROP POLICY IF EXISTS "Criar ou atualizar matrícula própria" ON public.matriculas;
DROP POLICY IF EXISTS "Criar matrícula própria" ON public.matriculas;

CREATE POLICY "Criar matrícula própria" ON public.matriculas
  FOR INSERT WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "Administrar matrículas" ON public.matriculas;
CREATE POLICY "Administrar matrículas" ON public.matriculas
  FOR UPDATE USING (public.is_admin_ou_professor())
  WITH CHECK (public.is_admin_ou_professor());

-- Progresso: Aluno gerencia seu progresso
DROP POLICY IF EXISTS "Gerenciar próprio progresso" ON public.progresso_disciplinas;
CREATE POLICY "Gerenciar próprio progresso" ON public.progresso_disciplinas
  FOR ALL USING (auth.uid() = user_id OR public.is_admin_ou_professor());

-- Avaliações / Provas: Aluno insere e consulta suas provas
DROP POLICY IF EXISTS "Ver próprias avaliações" ON public.avaliacoes_provas;
CREATE POLICY "Ver próprias avaliações" ON public.avaliacoes_provas
  FOR SELECT USING (auth.uid() = user_id OR public.is_admin_ou_professor());

DROP POLICY IF EXISTS "Inserir própria avaliação" ON public.avaliacoes_provas;
CREATE POLICY "Inserir própria avaliação" ON public.avaliacoes_provas
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Histórico Escolar: Aluno vê o seu; Admin/Professor gerencia
DROP POLICY IF EXISTS "Ver próprio histórico escolar" ON public.historico_escolar;
CREATE POLICY "Ver próprio histórico escolar" ON public.historico_escolar
  FOR SELECT USING (auth.uid() = user_id OR public.is_admin_ou_professor());

DROP POLICY IF EXISTS "Gerenciar histórico escolar" ON public.historico_escolar;
CREATE POLICY "Gerenciar histórico escolar" ON public.historico_escolar
  FOR ALL USING (auth.uid() = user_id OR public.is_admin_ou_professor());

-- Certificados: Aluno vê o seu; Consulta pública por código permitida a qualquer um!
DROP POLICY IF EXISTS "Validação pública de certificados" ON public.certificados;
CREATE POLICY "Validação pública de certificados" ON public.certificados
  FOR SELECT USING (true);

DROP POLICY IF EXISTS "Emissão de certificado por admin ou aluno concluinte" ON public.certificados;
CREATE POLICY "Emissão de certificado por admin ou aluno concluinte" ON public.certificados
  FOR INSERT WITH CHECK (auth.uid() = user_id OR public.is_admin_ou_professor());

-- Tutor Conversas: Aluno vê suas mensagens
DROP POLICY IF EXISTS "Ver próprias conversas do tutor" ON public.tutor_conversas;
CREATE POLICY "Ver próprias conversas do tutor" ON public.tutor_conversas
  FOR ALL USING (auth.uid() = user_id OR user_id IS NULL);

-- ==============================================================================
-- TRIGGERS E AUTOMAÇÃO ACADÊMICA
-- ==============================================================================

-- 1. Trigger para criar perfil automaticamente no Auth SignUp
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, nome_completo, role)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'nome_completo', NEW.raw_user_meta_data->>'nome', split_part(NEW.email, '@', 1)),
    COALESCE(NEW.raw_user_meta_data->>'role', 'aluno')
  )
  ON CONFLICT (id) DO UPDATE
  SET
    email = EXCLUDED.email,
    nome_completo = COALESCE(EXCLUDED.nome_completo, profiles.nome_completo);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- 2. Trigger para atualizar timestamp de 'atualizado_em'
CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.atualizado_em = timezone('utc'::text, now());
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS set_profiles_updated_at ON public.profiles;
CREATE TRIGGER set_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

DROP TRIGGER IF EXISTS set_matriculas_updated_at ON public.matriculas;
CREATE TRIGGER set_matriculas_updated_at
  BEFORE UPDATE ON public.matriculas
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();
