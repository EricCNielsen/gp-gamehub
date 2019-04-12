update users
set username = ${username}, email = ${email}, location = ${location}, bio = ${bio}, picture = ${picture}
where user_id = ${user_id}
returning username, email, location, bio, picture
