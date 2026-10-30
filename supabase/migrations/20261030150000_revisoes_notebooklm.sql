CREATE TABLE IF NOT EXISTS public.revisoes_notebooklm (
  disciplina_id TEXT PRIMARY KEY,
  link TEXT NOT NULL CHECK (link ~ '^https://'),
  atualizado_em TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

ALTER TABLE public.revisoes_notebooklm ENABLE ROW LEVEL SECURITY;
GRANT SELECT ON public.revisoes_notebooklm TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON public.revisoes_notebooklm TO authenticated;

DROP POLICY IF EXISTS "Revisoes visiveis a todos" ON public.revisoes_notebooklm;
CREATE POLICY "Revisoes visiveis a todos" ON public.revisoes_notebooklm
  FOR SELECT USING (true);

DROP POLICY IF EXISTS "Equipe pode inserir revisoes" ON public.revisoes_notebooklm;
CREATE POLICY "Equipe pode inserir revisoes" ON public.revisoes_notebooklm
  FOR INSERT WITH CHECK (public.is_admin_ou_professor());

DROP POLICY IF EXISTS "Equipe pode atualizar revisoes" ON public.revisoes_notebooklm;
CREATE POLICY "Equipe pode atualizar revisoes" ON public.revisoes_notebooklm
  FOR UPDATE USING (public.is_admin_ou_professor())
  WITH CHECK (public.is_admin_ou_professor());

DROP POLICY IF EXISTS "Equipe pode excluir revisoes" ON public.revisoes_notebooklm;
CREATE POLICY "Equipe pode excluir revisoes" ON public.revisoes_notebooklm
  FOR DELETE USING (public.is_admin_ou_professor());
