update clan
set name = ${name}, bio = ${bio}, avatar = ${avatar}
where clan_id = ${clan_id}
returning *