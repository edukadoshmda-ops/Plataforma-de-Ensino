CREATE OR REPLACE FUNCTION public.is_admin_ou_professor()
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT
    EXISTS (
      SELECT 1
      FROM public.profiles
      WHERE id::text = auth.uid()::text
        AND role IN ('superadmin', 'admin', 'professor', 'tutor')
    )
    OR lower(coalesce(auth.jwt() ->> 'email', '')) = 'edukadoshmda@gmail.com';
$$;
