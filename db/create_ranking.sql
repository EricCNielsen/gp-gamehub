INSERT INTO rankings (ranking, user_id, rater_id)
VALUES(${ranking}, ${user_id}, ${rater_id})
returning *
