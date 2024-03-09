-- CREATE DATABASE tasksdb;

-- CREATE TABLE task(
--   id SERIAL PRIMARY KEY,
--   title VARCHAR(255) UNIQUE,
--   description VARCHAR(255)
-- );

-- Crear la base de datos "assistance"
CREATE DATABASE IF NOT EXISTS assistance;

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  email VARCHAR(255),
  password VARCHAR(255)
);

-- CREATE TABLE client(
--   id SERIAL PRIMARY KEY,
--   firstName VARCHAR(255),
--   middleName VARCHAR(255),
--   lastName VARCHAR(255),
--   otherFullName VARCHAR(255) NULL,
--   Sex VARCHAR(255) NULL,
--   dateBirth DATE NULL,
--   cityBirth VARCHAR(255) NULL,
--   cityNationality VARCHAR(255) NULL,
--   alienRN VARCHAR(255) NULL,
--   USCISAccountN INTEGER NULL 
-- );



-- Usar la base de datos "assistance"
USE assistance;

-- Crear la tabla "confirmation"
CREATE TABLE IF NOT EXISTS confirmation (
    id SERIAL PRIMARY KEY,
    nameFull VARCHAR(255) NOT NULL,
    assistance VARCHAR(50) NOT NULL,
    companions BOOLEAN NOT NULL,
    companionsMount INT,
    message VARCHAR(255)
);
