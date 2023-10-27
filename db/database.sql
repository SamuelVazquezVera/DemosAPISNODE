CREATE DATABASE IF NOT EXISTS privadasturquesas;

CREATE TABLE `privadasturquesas`.`privada` (`id` INT NOT NULL AUTO_INCREMENT , `nombre` VARCHAR(300) NOT NULL , `activo` BOOLEAN NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;

CREATE TABLE `privadasturquesas`.`usuario` (`id` INT NOT NULL AUTO_INCREMENT , `nombre` VARCHAR(200) NOT NULL , `password` VARCHAR(16) NOT NULL , `telefono` VARCHAR(10) NOT NULL , 
`idprivada` INT NOT NULL , `casa` VARCHAR(200) NOT NULL , `esprimeravez` BOOLEAN NOT NULL , `esadministrador` BOOLEAN NOT NULL , `esmoroso` BOOLEAN NOT NULL , 
`esseguridad` BOOLEAN NOT NULL , `essuperadmin` BOOLEAN NOT NULL , `esresidente` BOOLEAN NOT NULL , PRIMARY KEY (`id`),
FOREIGN KEY(idprivada) REFERENCES privada(id)
ON DELETE CASCADE ON UPDATE CASCADE ) ENGINE = InnoDB;