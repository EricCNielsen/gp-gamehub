select user_id, username, email, location, picture, bio
from users
where auth_id = $1