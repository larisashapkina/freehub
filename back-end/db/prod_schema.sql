DROP DATABASE IF EXISTS users;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    firstname TEXT NOT NULL,
    lastname TEXT NOT NULL,
    username TEXT,
    password TEXT,
    email TEXT NOT NULL
);

DROP TABLE IF EXISTS listings;

CREATE TABLE listings (
    id SERIAL PRIMARY KEY,
    category TEXT,
    title VARCHAR (255) NOT NULL,
    description TEXT,
    image TEXT,
    user_id INTEGER REFERENCES users (id)
    ON DELETE CASCADE
);