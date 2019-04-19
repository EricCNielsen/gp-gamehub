select u.user_id, u.username, u.picture
from users u
join users_clans on users_clans.user_id = u.user_id
where clan_id = $1