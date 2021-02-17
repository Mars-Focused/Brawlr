--this function should return the information all the users that share a game with our
--logged in user, minus the people who are already on his friends list.
--we can cut it down to just get ALL peole who share a game with us

SELECT DISTINCT user_id FROM brawlr_game_user_junction
WHERE game_id IN (
SELECT game_id from brawlr_game_user_junction
WHERE user_id = $1
) AND user_id NOT IN (
SELECT user_id_2 FROM brawlr_user_user_junction
WHERE user_id_1 = $1 OR user_id_2 = $1
) AND user_id NOT IN (
SELECT user_id_1 FROM brawlr_user_user_junction
WHERE user_id_1 = $1 OR user_id_2 = $1
)