\c asyncawait;
copy users(name,lastname,email,gender,phone,picture) FROM './db/seed/01_users.csv' csv header;
