DROP DATABASE IF EXISTS users_dev;
CREATE DATABASE users_dev;

\c users_dev;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    firstname TEXT NOT NULL,
    lastname TEXT NOT NULL,
    username TEXT NOT NULL,
    password TEXT,
    email TEXT NOT NULL
);

DROP TABLE IF EXISTS listings;

CREATE TABLE listings (
    id SERIAL PRIMARY KEY,
    category TEXT,
    title TEXT NOT NULL,
    description TEXT,
    image TEXT,
    user_id INTEGER REFERENCES users (id)
    ON DELETE CASCADE
);