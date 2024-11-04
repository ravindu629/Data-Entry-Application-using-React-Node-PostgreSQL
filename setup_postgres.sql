-- setup_postgres.sql

-- 1. Create the database
CREATE DATABASE "TestDB";

-- 2. Create a table within TestDB
CREATE TABLE IF NOT EXISTS "Ravindu_table" (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    age INTEGER NOT NULL,
    city VARCHAR(50) NOT NULL
);

-- 3. Insert sample data into the table
INSERT INTO "Ravindu_table" (name, age, city) VALUES
('John Doe', 28, 'New York'),
('Jane Smith', 34, 'Los Angeles'),
('Alice Johnson', 22, 'Chicago'),
('Robert Brown', 30, 'Houston'),
('Emily Davis', 27, 'Phoenix'),
('Michael Wilson', 45, 'Philadelphia'),
('Sarah Martinez', 19, 'San Antonio'),
('Daniel Moore', 33, 'San Diego'),
('Nancy Taylor', 29, 'Dallas'),
('Chris Anderson', 41, 'San Jose');
