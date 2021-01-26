INSERT INTO brawlr_games
(game_name)
VALUES
($1)
RETURNING game_id;