select *
from users
where username ilike '%' || $1 || '%'