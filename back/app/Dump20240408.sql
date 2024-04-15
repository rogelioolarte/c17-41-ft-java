DROP DATABASE if EXISTS playzo;
CREATE DATABASE playzo CHARACTER SET utf8 COLLATE UTF8_GENERAL_CI;
USE playzo;


-- Table structure for table `currency`


DROP TABLE IF EXISTS currency;

CREATE TABLE `currency` (
  crypto_id BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  product_name varchar(255),
  symbol varchar(255),
  product_type tinyint,
  current_price double(10,2),
  previous_price double(10,2),
  last_update datetime,
  active bit(1) DEFAULT 1
);


DROP TABLE IF EXISTS `currency_seq`;

CREATE TABLE `currency_seq` (
  `next_val` bigint DEFAULT NULL
);

   INSERT INTO currency_seq (next_val) VALUES ( 1);



-- Table structure for table `users`


DROP TABLE IF EXISTS users;

CREATE TABLE users (
  user_id BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name varchar(45),
  last_name varchar(45),
  dni int UNIQUE,
  email varchar(45) NOT NULL UNIQUE,
  `password` varchar(45) NOT NULL,
  avatar TEXT,
  wallet decimal(18,2) DEFAULT 0,
  cbu_dollar varchar(45),
  `cbu_pesos` varchar(45)
);

DROP TABLE IF EXISTS `users_seq`;

CREATE TABLE `users_seq` (
  `next_val` bigint DEFAULT NULL
);

INSERT INTO users_seq (next_val) VALUES ( 1);
-- Table structure for table `transactions`


DROP TABLE IF EXISTS transactions;

CREATE TABLE `transactions` (
  transaction_id BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  user_id BIGINT,
  crypto_id BIGINT,
  transaction_type enum('buy','sell') NOT NULL,
  quantity int NOT NULL,
  price_per_unit decimal(18,2) NOT NULL,
  total decimal(18,2) NOT NULL,
  transaction_date date NOT NULL,
FOREIGN KEY (user_id) REFERENCES Users (user_id),
FOREIGN KEY (crypto_id) REFERENCES currency (crypto_id)
);

DROP TABLE IF EXISTS `transactions_seq`;

CREATE TABLE `transactions_seq` (
  `next_val` bigint DEFAULT NULL
);

   INSERT INTO transactions_seq (next_val) VALUES ( 1);
