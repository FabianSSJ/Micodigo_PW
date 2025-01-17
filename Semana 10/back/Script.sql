CREATE DATABASE semanadiez;
use semanadiez;

CREATE TABLE autos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    brand VARCHAR(50) NOT NULL,
    npassengers INT NOT NULL,
    color VARCHAR(20) NOT NULL,
    nengine VARCHAR(30) NOT NULL,
    model VARCHAR(50) NOT NULL
);
