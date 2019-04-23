select users.user_id, username, users.picture, content, title, post_id, parent_id, date, posts.picture as images
FROM posts
    JOIN users ON users.user_id = posts.user_id
WHERE posts.post_id = $1 or posts.parent_id = $1;
