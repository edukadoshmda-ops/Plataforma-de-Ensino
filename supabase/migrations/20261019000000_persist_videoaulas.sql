CREATE TABLE IF NOT EXISTS public.videoaulas_personalizadas (
  disciplina_id TEXT PRIMARY KEY,
  youtube_id TEXT NOT NULL CHECK (youtube_id ~ '^[A-Za-z0-9_-]{11}$'),
  titulo_canal TEXT,
  duracao TEXT,
  atualizado_em TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE OR REPLACE FUNCTION public.is_admin_ou_professor()
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.profiles
    WHERE id::text = auth.uid()::text
      AND role IN ('superadmin', 'admin', 'professor', 'tutor')
  ) OR lower(coalesce(auth.jwt() ->> 'email', '')) = 'edukadoshmda@gmail.com';
$$;

ALTER TABLE public.videoaulas_personalizadas ENABLE ROW LEVEL SECURITY;
GRANT SELECT ON public.videoaulas_personalizadas TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON public.videoaulas_personalizadas TO authenticated;

DROP POLICY IF EXISTS "Videoaulas visíveis a todos" ON public.videoaulas_personalizadas;
CREATE POLICY "Videoaulas visíveis a todos" ON public.videoaulas_personalizadas
  FOR SELECT USING (true);

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
