select (
	select coalesce(json_agg(jc), '[]'::json)
    from (
		select uc.user_id, uc.clan_id
        from users_clans as uc
        where user_id = ${user_id}
	)jc
)clans, (
	select coalesce(json_agg(ji), '[]'::json)
    from (
		select ci.clan_id, invitee_id
        from clans_invitations as ci
        where invitee_id = ${user_id}
	)ji
) invitations
from users
where user_id = ${user_id}	