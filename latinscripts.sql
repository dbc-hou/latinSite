DROP DATABASE if exists latin_db;
CREATE DATABASE if not exists latin_db;
USE latin_db;

create table verbs (
     ID int NOT NULL UNIQUE,
     FirstPart varchar(32) NOT NULL,
     SecondPart varchar(32) NOT NULL,
     ThirdPart varchar(32),
     Supine varchar(32),
     Conjugation varchar(10) NOT NULL,
     Deponency varchar(16),
     Notes text
);
