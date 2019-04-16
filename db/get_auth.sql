select user_id, username, email, location, picture, bio, exp, auth_id
from users
where auth_id = $1