select u.*, (
        select trunc(avg(r.ranking), 2) as ar
        from rankings r
        where r.user_id = u.user_id
) ranking
from users u
where username ilike '%' || $1 || '%'