select *
from clan
where name ilike '%' || $1 || '%'