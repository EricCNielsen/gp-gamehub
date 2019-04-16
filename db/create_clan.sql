insert into clan
    (name, bio, avatar, competitive, owner_id, private)
VALUES
    (${name}, ${bio},  ${avatar}, ${competitive}, ${owner_id}, ${private})

-- SELECT *
-- FROM clan
-- WHERE owner_id = ${owner_id}

RETURNING *