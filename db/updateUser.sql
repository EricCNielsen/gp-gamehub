update users
set username = ${username}, email = ${email}, location = ${location}, bio = ${bio}, avatar = ${avatar}

returning username, email, location, bio, avatar;
