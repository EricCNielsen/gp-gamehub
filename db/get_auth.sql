select user_id, username, email, location, picture, bio, exp
from users
where auth_id = $1