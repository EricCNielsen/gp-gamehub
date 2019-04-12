select u.*, r.ranking
from users u
join rankings r on u.user_id =  r.user_id
where username ilike '%' || $1 || '%'