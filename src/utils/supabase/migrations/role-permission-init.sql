insert into public.role_permissions (role, permission)
values
  ('end_user', 'tickets.create'),
  ('end_user', 'tickets.view'),
  ('it_support', 'tickets.update'),
  ('it_support', 'tickets.view'),
  ('head_it', 'tickets.view'),
  ('head_it', 'tickets.update'),
  ('head_it', 'tickets.delete');