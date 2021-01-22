DROP TABLE IF EXISTS user_user_junction;
DROP TABLE IF EXISTS game_user_junction;
DROP TABLE IF EXISTS brawlr_games;
DROP TABLE IF EXISTS brawlr_users;

CREATE TABLE brawlr_users (
  user_id SERIAL PRIMARY KEY,
  username VARCHAR(250) UNIQUE NOT NULL,
  hash VARCHAR(500) NOT NULL,
  contact_info VARCHAR(500) NOT NULL
);

CREATE TABLE brawlr_games (
  game_id SERIAL PRIMARY KEY,
  game_name VARCHAR(100) NOT NULL
);

CREATE TABLE game_user_junction(
  guj_id SERIAL PRIMARY KEY,
  user_id INT REFERENCES brawlr_users (user_id),
  game_id INT REFERENCES brawlr_games (game_id)
);

CREATE TABLE user_user_junction(
  uuj_id SERIAL PRIMARY KEY,
  user_id_1 INT REFERENCES brawlr_users (user_id),
  user_id_2 INT REFERENCES brawlr_users (user_id)
);

INSERT INTO brawlr_users
(username, hash, contact_info)
VALUES
('Sol Badguy', '$2a$10$fwQ33X5CVGmQhgXJL1UuF.NeuQWj5haKMXsOxNxj4/rRiv6/jWwDW', 'SolBadguy@email.com'),
('Peacock', '$2a$10$fwQ33X5CVGmQhgXJL1UuF.NeuQWj5haKMXsOxNxj4/rRiv6/jWwDW', 'Peacock@email.com'),
('Mario', '$2a$10$fwQ33X5CVGmQhgXJL1UuF.NeuQWj5haKMXsOxNxj4/rRiv6/jWwDW', 'Mario@email.com'),
('Degray', '$2a$10$fwQ33X5CVGmQhgXJL1UuF.NeuQWj5haKMXsOxNxj4/rRiv6/jWwDW', 'Degray@email.com'),
('PxlNinjaLeft', '$2a$10$fwQ33X5CVGmQhgXJL1UuF.NeuQWj5haKMXsOxNxj4/rRiv6/jWwDW', 'FootsiesL@email.com'),
('Ryu', '$2a$10$fwQ33X5CVGmQhgXJL1UuF.NeuQWj5haKMXsOxNxj4/rRiv6/jWwDW', 'Ryu@email.com'),
('Ky kiske', '$2a$10$fwQ33X5CVGmQhgXJL1UuF.NeuQWj5haKMXsOxNxj4/rRiv6/jWwDW', 'Kykiske@email.com'),
('Peach', '$2a$10$fwQ33X5CVGmQhgXJL1UuF.NeuQWj5haKMXsOxNxj4/rRiv6/jWwDW', 'Peach@email.com'),
('Ken', '$2a$10$fwQ33X5CVGmQhgXJL1UuF.NeuQWj5haKMXsOxNxj4/rRiv6/jWwDW', 'Ken@email.com'),
('Geiger', '$2a$10$fwQ33X5CVGmQhgXJL1UuF.NeuQWj5haKMXsOxNxj4/rRiv6/jWwDW', 'Geiger@email.com'),
('Valentine', '$2a$10$fwQ33X5CVGmQhgXJL1UuF.NeuQWj5haKMXsOxNxj4/rRiv6/jWwDW', 'Valentine@email.com'),
('Ramlethal', '$2a$10$fwQ33X5CVGmQhgXJL1UuF.NeuQWj5haKMXsOxNxj4/rRiv6/jWwDW', 'Ramlethal@email.com'),
('Bedman', '$2a$10$fwQ33X5CVGmQhgXJL1UuF.NeuQWj5haKMXsOxNxj4/rRiv6/jWwDW', 'Bedman@email.com'),
('PxlNinjaRight', '$2a$10$fwQ33X5CVGmQhgXJL1UuF.NeuQWj5haKMXsOxNxj4/rRiv6/jWwDW', 'FootsiesR@email.com');

INSERT INTO brawlr_games
(game_name)
VALUES
('Guilty Gear Xrd Rev2'),
('Super Smash Brothers Ultimate'),
('Dragonball Fighterz'),
('Skullgirls'),
('Footsies'),
('Fantasy Strike'),
('Street Fighter V');

INSERT INTO user_user_junction
(user_id_1, user_id_2)
VALUES
(1,1),
(1,12),
(1,13),
(2,11),
(3,8),
(4,10),
(5,14),
(6,9);

INSERT INTO game_user_junction
(user_id, game_id)
VALUES
(1,1),
(2,4),
(3,2),
(4,6),
(5,5),
(6,7),
(7,1),
(8,2),
(9,7),
(10,6),
(11,4),
(12,1),
(13,1),
(14,5),
(8,3),
(3,3),
(7,3),
(4,3),
(12,3);