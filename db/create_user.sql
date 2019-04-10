insert into users
    (username, email, picture, auth_id)
values
    ($1, $2, $3, $4)
returning *;