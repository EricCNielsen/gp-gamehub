select users.username, clan.clan_id, clan.name, clans_invitations.id
FROM clans_invitations
join users ON users.user_id = inviter_id
join clan ON clan.clan_id = clans_invitations.clan_id
WHERE invitee_id =${user_id}