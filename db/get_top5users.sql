select u.username, count(*), trunc(avg(r.ranking), 2) as a_r
from users u
join rankings r on r.user_id = u.user_id
group by u.user_id
order by a_r desc
limit 5;