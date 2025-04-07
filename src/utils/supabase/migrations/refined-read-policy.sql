DROP POLICY "Allow authorized read access" ON public.tickets;

CREATE POLICY "Allow authorized read access" ON public.tickets 
FOR SELECT 
TO authenticated 
USING (
  -- Check if the user has 'tickets.view' permission
  (SELECT authorize('tickets.view'))
  AND
  -- For 'end_user', restrict to rows where created_by matches their UUID
  CASE 
    WHEN (auth.jwt() ->> 'user_role')::public.app_role = 'end_user' 
    THEN created_by = auth.uid()
    ELSE true -- No restriction for other roles
  END
);