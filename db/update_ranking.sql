UPDATE rankings
SET ranking = ${ranking}
WHERE id = ${ranking_id}
returning *