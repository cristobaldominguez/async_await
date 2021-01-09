CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(75) NOT NULL,
    lastname VARCHAR(75) NOT NULL,
    email VARCHAR(100) NOT NULL,
    gender VARCHAR(6),
    phone VARCHAR(15),
    picture VARCHAR(255),
    location_lat VARCHAR(15),
    location_lon VARCHAR(15)
);
