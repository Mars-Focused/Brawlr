DROP TABLE IF EXISTS user_user_junction;
DROP TABLE IF EXISTS game_user_junction;
DROP TABLE IF EXISTS brawlr_games;
DROP TABLE IF EXISTS brawlr_users;

CREATE TABLE brawlr_users (
  user_id SERIAL PRIMARY KEY,
  username VARCHAR(250) UNIQUE NOT NULL,
  hash VARCHAR(500) NOT NULL,
  contact_info VARCHAR(500),
  about_me VARCHAR(500),
  my_main VARCHAR(20)
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
('Sol Badguy', '$2a$10$fwQ33X5CVGmQhgXJL1UuF.NeuQWj5haKMXsOxNxj4/rRiv6/jWwDW', 'SolBadguy@email.com', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctu.', 'MyMainHere'),
('Peacock', '$2a$10$fwQ33X5CVGmQhgXJL1UuF.NeuQWj5haKMXsOxNxj4/rRiv6/jWwDW', 'Peacock@email.com', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctu.', 'MyMainHere'),
('Mario', '$2a$10$fwQ33X5CVGmQhgXJL1UuF.NeuQWj5haKMXsOxNxj4/rRiv6/jWwDW', 'Mario@email.com', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctu.', 'MyMainHere'),
('Degray', '$2a$10$fwQ33X5CVGmQhgXJL1UuF.NeuQWj5haKMXsOxNxj4/rRiv6/jWwDW', 'Degray@email.com', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctu.', 'MyMainHere'),
('PxlNinjaLeft', '$2a$10$fwQ33X5CVGmQhgXJL1UuF.NeuQWj5haKMXsOxNxj4/rRiv6/jWwDW', 'FootsiesL@email.com', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctu.', 'MyMainHere'),
('Ryu', '$2a$10$fwQ33X5CVGmQhgXJL1UuF.NeuQWj5haKMXsOxNxj4/rRiv6/jWwDW', 'Ryu@email.com', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctu.', 'MyMainHere'),
('Ky kiske', '$2a$10$fwQ33X5CVGmQhgXJL1UuF.NeuQWj5haKMXsOxNxj4/rRiv6/jWwDW', 'Kykiske@email.com', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctu.', 'MyMainHere'),
('Peach', '$2a$10$fwQ33X5CVGmQhgXJL1UuF.NeuQWj5haKMXsOxNxj4/rRiv6/jWwDW', 'Peach@email.com', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctu.', 'MyMainHere'),
('Ken', '$2a$10$fwQ33X5CVGmQhgXJL1UuF.NeuQWj5haKMXsOxNxj4/rRiv6/jWwDW', 'Ken@email.com', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctu.', 'MyMainHere'),
('Geiger', '$2a$10$fwQ33X5CVGmQhgXJL1UuF.NeuQWj5haKMXsOxNxj4/rRiv6/jWwDW', 'Geiger@email.com', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctu.', 'MyMainHere'),
('Valentine', '$2a$10$fwQ33X5CVGmQhgXJL1UuF.NeuQWj5haKMXsOxNxj4/rRiv6/jWwDW', 'Valentine@email.com', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctu.', 'MyMainHere'),
('Ramlethal', '$2a$10$fwQ33X5CVGmQhgXJL1UuF.NeuQWj5haKMXsOxNxj4/rRiv6/jWwDW', 'Ramlethal@email.com', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctu.', 'MyMainHere'),
('Bedman', '$2a$10$fwQ33X5CVGmQhgXJL1UuF.NeuQWj5haKMXsOxNxj4/rRiv6/jWwDW', 'Bedman@email.com', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctu.', 'MyMainHere'),
('PxlNinjaRight', '$2a$10$fwQ33X5CVGmQhgXJL1UuF.NeuQWj5haKMXsOxNxj4/rRiv6/jWwDW', 'FootsiesR@email.com', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctu.', 'MyMainHere'),
('Mars', '$2a$10$fwQ33X5CVGmQhgXJL1UuF.NeuQWj5haKMXsOxNxj4/rRiv6/jWwDW', 'Mars@email.com', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctu.', 'MyMainHere');

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
(6,9),
(15,7),
(15,12),
(15,10);

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
(7,3),
(4,3),
(12,3);