update users
set username = ${username}, email = ${email}, location = ${location}, bio = ${bio}, picture = ${picture}, exp = ${exp}
where user_id = ${user_id}
returning *
