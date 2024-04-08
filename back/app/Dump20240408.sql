-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: nocountry
-- ------------------------------------------------------
-- Server version	8.0.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `currency`
--

DROP TABLE IF EXISTS `currency`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `currency` (
  `crypto_id` bigint NOT NULL,
  `product_name` varchar(255) DEFAULT NULL,
  `symbol` varchar(255) DEFAULT NULL,
  `product_type` tinyint DEFAULT NULL,
  `current_price` double(10,2) DEFAULT NULL,
  `previous_price` double(10,2) DEFAULT NULL,
  `last_update` datetime DEFAULT NULL,
  `active` bit(1) DEFAULT NULL,
  PRIMARY KEY (`crypto_id`),
  CONSTRAINT `currency_chk_1` CHECK ((`product_type` between 0 and 1))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `currency`
--

LOCK TABLES `currency` WRITE;
/*!40000 ALTER TABLE `currency` DISABLE KEYS */;
INSERT INTO `currency` VALUES (102,'Bitcoin','BTC',0,72089.66,44695.59,'2024-04-08 07:41:02',_binary ''),(103,'Ethereum','ETH',0,3623.80,2609.14,'2024-04-08 07:41:02',_binary ''),(104,'Tether','USDT',0,1.00,0.96,'2024-04-08 07:41:02',_binary ''),(105,'Binance Coin','BNB',0,597.52,322.66,'2024-04-08 07:41:02',_binary ''),(106,'Solana','SOL',0,183.16,87.92,'2024-04-08 07:41:02',_binary ''),(107,'Staked Ether','STETH',0,3614.91,2602.74,'2024-04-08 07:41:02',_binary ''),(108,'Dogecoin','DOGE',0,0.21,0.13,'2024-04-08 07:41:02',_binary ''),(109,'USD Coin','USDC',0,1.00,0.99,'2024-04-08 07:41:02',_binary ''),(110,'XRP','XRP',0,0.61,0.57,'2024-04-08 07:41:02',_binary ''),(111,'Cardano','ADA',0,0.61,0.51,'2024-04-08 07:41:02',_binary ''),(112,'TON Coin','TON',0,5.84,-7.71,'2024-04-08 07:41:02',_binary ''),(113,'Avalanche','AVAX',0,50.74,-3.55,'2024-04-08 07:41:02',_binary ''),(114,'Shiba Inu','SHIB',0,0.00,0.00,'2024-04-08 07:41:02',_binary ''),(115,'Bitcoin Cash','BCH',0,706.57,49.46,'2024-04-08 07:41:02',_binary ''),(116,'Polkadot','DOT',0,8.97,6.19,'2024-04-08 07:41:02',_binary '');
/*!40000 ALTER TABLE `currency` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `currency_seq`
--

DROP TABLE IF EXISTS `currency_seq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `currency_seq` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `currency_seq`
--

LOCK TABLES `currency_seq` WRITE;
/*!40000 ALTER TABLE `currency_seq` DISABLE KEYS */;
INSERT INTO `currency_seq` VALUES (201);
/*!40000 ALTER TABLE `currency_seq` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transactions`
--

DROP TABLE IF EXISTS `transactions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `transactions` (
  `transaction_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `product_id` int NOT NULL,
  `transaction_type` enum('buy','sell') NOT NULL,
  `quantity` int NOT NULL,
  `price_per_unit` decimal(18,2) NOT NULL,
  `total` decimal(18,2) NOT NULL,
  `transaction_date` date NOT NULL,
  PRIMARY KEY (`transaction_id`),
  UNIQUE KEY `transaction_id_UNIQUE` (`transaction_id`),
  KEY `user_id_idx` (`user_id`),
  CONSTRAINT `user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transactions`
--

LOCK TABLES `transactions` WRITE;
/*!40000 ALTER TABLE `transactions` DISABLE KEYS */;
/*!40000 ALTER TABLE `transactions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `dni` int NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `avatar` mediumtext NOT NULL,
  `wallet` decimal(18,2) NOT NULL,
  `cbu_dollar` varchar(45) DEFAULT NULL,
  `cbu_pesos` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `user_id_UNIQUE` (`user_id`),
  UNIQUE KEY `dni_UNIQUE` (`dni`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `cbu_dollar_UNIQUE` (`cbu_dollar`),
  UNIQUE KEY `cbu_pesos_UNIQUE` (`cbu_pesos`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'gonza','vallone',39406819,'gonzalo@gmail','qurerty','asd.jpg',0.00,'74637362','8473683'),(2,'gonzalo','vone',39407819,'gonzaliyo@gmail','quererty','asd234.jpg',0.00,'74645362','8478683');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-08 14:34:30
