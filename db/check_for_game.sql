-- I'm trying to set this file up, so that we take in the user_id and a game_name that
-- may or may not exist on our database
-- if the game_name does exist, it will get the game_id from game_name and the user_id 
-- and place them both into our brawlr_game_user_junction Table
-- if the game_name does NOT exist it will add it to the brawlr_games table and THEN 
-- add the game_id and user_id to the brawlr_game_user_junction Table

-- for now tho I'm just going to return the id of a game that's been entered*********



SELECT game_id FROM brawlr_games
WHERE game_name = $1

--MAKE SURE THAT THE VARIABLE COMING IN IS A STRING WITH '' AROUND IT!!!!!!!!!!!!