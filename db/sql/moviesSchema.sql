-- SET UP SCHEMA HERE

CREATE DATABASE IF NOT EXISTS badmovies;

use badmovies;

CREATE TABLE IF NOT EXISTS favorites (
    movie_id INT PRIMARY KEY AUTO_INCREMENT,
    movie_name TEXT
);

