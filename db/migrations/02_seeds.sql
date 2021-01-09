\c asyncawait;
\copy users(name,lastname,email,gender,phone,picture,location_lat,location_lon) FROM './db/seed/01_users.csv' csv header;
