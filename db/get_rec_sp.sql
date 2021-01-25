--this function should return the information all the users that share a game with our
--logged in user, minus the people who are already on his friends list.
--we can cut it down to just get ALL peole who share a game with us

-- SELECT user_id FROM game_user_junction
-- WHERE game_id = $1

SELECT * FROM brawlr_users

--DON'T BOTHER FILTERING OUT PEOPLE WE'RE ALREADY SP'S WITH!!!!!!!!!!!!