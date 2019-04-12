select user_id, username, email, location, picture, bio, ranking
from users
where auth_id = $1