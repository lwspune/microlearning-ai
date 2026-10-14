-- items_figure_shape let malformed figures through: with `alt` missing, the
-- check expression is NULL, and a CHECK passes on NULL. Treat NULL as false.

alter table items drop constraint items_figure_shape;

alter table items
  add constraint items_figure_shape check (
    figure is null or coalesce(
      jsonb_typeof(figure) = 'object'
      and jsonb_typeof(figure -> 'alt') = 'string'
      and btrim(figure ->> 'alt') <> ''
      and jsonb_typeof(figure -> 'elements') = 'array',
      false
    )
  );
