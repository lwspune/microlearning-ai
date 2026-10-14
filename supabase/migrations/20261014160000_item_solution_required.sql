-- Every item now has a step-by-step solution (Phase B brought the last
-- concepts up to AUTHORING.md item 9), so the column is required.
-- items_solution_shape still checks what a solution looks like.

alter table items alter column solution set not null;
