--this function should return the information all the users that share a game with our
--logged in user, minus the people who are already on his friends list.
--we can cut it down to just get ALL peole who share a game with us

-- SELECT user_id FROM game_user_junction
-- WHERE game_id = $1

SELECT DISTINCT user_id FROM game_user_junction
WHERE game_id IN (
SELECT game_id from game_user_junction
WHERE user_id = $1
) AND user_id NOT IN (
SELECT user_id_2 FROM user_user_junction
WHERE user_id_1 = $1 OR user_id_2 = $1
) AND user_id NOT IN (
SELECT user_id_1 FROM user_user_junction
WHERE user_id_1 = $1 OR user_id_2 = $1
)

--take in user id
--Find each row for our user_id in user_game_junction_table
--return all game id's connected to our user
--for game_id find each user_id

--DON'T BOTHER FILTERING OUT PEOPLE WE'RE ALREADY SP'S WITH!!!!!!!!!!!!