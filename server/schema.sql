-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema washing
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema washing
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `washing` DEFAULT CHARACTER SET utf8 ;
USE `washing` ;

-- -----------------------------------------------------
-- Table `washing`.`clients`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `washing`.`clients` (
  `client_id` INT NOT NULL AUTO_INCREMENT,
  `client_name` VARCHAR(45) NULL,
  `client_email` VARCHAR(45) NULL,
  `client_image` VARCHAR(45) NULL,
  PRIMARY KEY (`client_id`),
  UNIQUE INDEX `client_id_UNIQUE` (`client_id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `washing`.`workers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `washing`.`workers` (
  `worker_id` INT NOT NULL AUTO_INCREMENT,
  `worker_name` VARCHAR(45) NULL,
  `worker_email` VARCHAR(45) NULL,
  `worker_image` VARCHAR(255) NULL,
  `worker_phone_number` INT NULL,
  UNIQUE INDEX `worker_id_UNIQUE` (`worker_id` ASC) VISIBLE,
  PRIMARY KEY (`worker_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `washing`.`feedback`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `washing`.`feedback` (
  `feedback_id` INT NOT NULL AUTO_INCREMENT,
  `content` VARCHAR(45) NULL,
  `rating` INT NULL,
  `workers_worker_id` INT NOT NULL,
  PRIMARY KEY (`feedback_id`, `workers_worker_id`),
  UNIQUE INDEX `feedback_id_UNIQUE` (`feedback_id` ASC) VISIBLE,
  INDEX `fk_feedback_workers_idx` (`workers_worker_id` ASC) VISIBLE,
  CONSTRAINT `fk_feedback_workers`
    FOREIGN KEY (`workers_worker_id`)
    REFERENCES `washing`.`workers` (`worker_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `washing`.`services`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `washing`.`services` (
  `service_id` INT NOT NULL AUTO_INCREMENT,
  `service_name` VARCHAR(45) NULL,
  `service_price` INT NULL,
  `duration` VARCHAR(45) NULL,
  PRIMARY KEY (`service_id`),
  UNIQUE INDEX `service_id_UNIQUE` (`service_id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `washing`.`clients_has_workers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `washing`.`clients_has_workers` (
  `clients_client_id` INT NOT NULL,
  `workers_worker_id` INT NOT NULL,
  `services_service_id` INT NOT NULL,
  `clients_has_workers_date` VARCHAR(45) NULL,
  PRIMARY KEY (`clients_client_id`, `workers_worker_id`, `services_service_id`),
  INDEX `fk_clients_has_workers_workers1_idx` (`workers_worker_id` ASC) VISIBLE,
  INDEX `fk_clients_has_workers_clients1_idx` (`clients_client_id` ASC) VISIBLE,
  INDEX `fk_clients_has_workers_services1_idx` (`services_service_id` ASC) VISIBLE,
  CONSTRAINT `fk_clients_has_workers_clients1`
    FOREIGN KEY (`clients_client_id`)
    REFERENCES `washing`.`clients` (`client_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_clients_has_workers_workers1`
    FOREIGN KEY (`workers_worker_id`)
    REFERENCES `washing`.`workers` (`worker_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_clients_has_workers_services1`
    FOREIGN KEY (`services_service_id`)
    REFERENCES `washing`.`services` (`service_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
