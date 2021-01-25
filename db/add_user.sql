INSERT INTO brawlr_users
(username, hash)
VALUES
($1, $2)
returning *;