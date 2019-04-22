select users.user_id, username, users.picture, content, title, post_id, parent_id, date
from posts
    JOIN users ON users.user_id = posts.user_id
WHERE posts.parent_id = 23