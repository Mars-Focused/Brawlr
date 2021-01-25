SELECT brawlr_games.game_name, brawlr_games.game_id FROM game_user_junction
JOIN brawlr_games ON brawlr_games.game_id = game_user_junction.game_id
WHERE game_user_junction.user_id = $1;