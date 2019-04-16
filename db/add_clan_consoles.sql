INSERT INTO clans_consoles
    (clan_id, console_id)
VALUE($
{clan_id}, ${console_id})
returning * 
FROM clans_consoles
WHERE clan_id = ${clan_id}