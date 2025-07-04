-- Create the database
CREATE DATABASE IF NOT EXISTS studentinfo;
USE studentinfo;

-- Table to store basic student info
CREATE TABLE IF NOT EXISTS student_data (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    percentage FLOAT
);

-- Table to store marks per subject
CREATE TABLE IF NOT EXISTS student_marks (
    id INT PRIMARY KEY,
    english INT CHECK (english BETWEEN 0 AND 100),
    maths INT CHECK (maths BETWEEN 0 AND 100),
    dsa INT CHECK (dsa BETWEEN 0 AND 100),
    electronics INT CHECK (electronics BETWEEN 0 AND 100),
    percentage FLOAT
);
