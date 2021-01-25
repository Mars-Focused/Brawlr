UPDATE brawlr_users 
SET contact_info = $2 
WHERE user_id = $1;

-- MAKE SURE CONTACT INFO IS A 'STRING'!!!!!!!!!!!!