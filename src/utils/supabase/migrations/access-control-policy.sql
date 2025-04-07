CREATE POLICY "Allow authorized delete access" ON public.tickets FOR DELETE TO authenticated USING ( (SELECT authorize('tickets.delete')) );

CREATE POLICY "Allow authorized create access" ON public.tickets FOR INSERT TO authenticated WITH CHECK ( (SELECT authorize('tickets.create')) );

CREATE POLICY "Allow authorized update access" ON public.tickets FOR UPDATE TO authenticated USING ( (SELECT authorize('tickets.update')) ) WITH CHECK ( (SELECT authorize('tickets.update')) );

CREATE POLICY "Allow authorized read access" ON public.tickets FOR SELECT TO authenticated USING ( (SELECT authorize('tickets.view')) );