insert into clans
    (name, bio, avatar, competitive, owner_id, private)
VALUES
    ($
{name}, ${bio}, ${avatar}, ${competitive}, ${owner_id}, ${private});
returning *
FROM clans
WHERE owner_id = ${owner_id}