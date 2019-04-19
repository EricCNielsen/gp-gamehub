select users.user_id, username, users.picture, content, post_id, parent_id, date, posts.picture as images
FROM posts
    JOIN users ON users.user_id = posts.user_id
WHERE posts.clan_id = ${clan_id}