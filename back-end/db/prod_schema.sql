DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS listings;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    firstname TEXT NOT NULL,
    lastname TEXT NOT NULL,
    username TEXT,
    password TEXT,
    email TEXT NOT NULL
);

CREATE TABLE listings (
    id SERIAL PRIMARY KEY,
    category TEXT,
    title TEXT NOT NULL,
    description TEXT,
    image TEXT,
    user_id INTEGER REFERENCES users (id)
    ON DELETE CASCADE
);