INSERT INTO users_clans (user_id, clan_id)
VALUES(${user_id}, ${clan_id});

select clan.clan_id, name, clan.bio, avatar, competitive, owner_id, private, ranking
FROM clan
    JOIN users_clans ON users_clans.clan_id = clan.clan_id
    JOIN users ON users.user_id = users_clans.user_id
WHERE users.user_id = ${user_id}