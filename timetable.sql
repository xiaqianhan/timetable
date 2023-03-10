-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: localhost    Database: timetable
-- ------------------------------------------------------
-- Server version	8.0.22

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `ev_bookcity`
--

DROP TABLE IF EXISTS `ev_bookcity`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ev_bookcity` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL COMMENT '用户名',
  `nickname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '用户昵称',
  `bookNumber` varchar(255) NOT NULL COMMENT '书本编号',
  `bookType` int NOT NULL COMMENT '书本类型，1为小说，2为漫画，3为历史，4为教材，5为科学，6为人文',
  `bookname` varchar(255) NOT NULL COMMENT '书本名称',
  `amount` varchar(255) NOT NULL COMMENT '付款金额',
  `describe` varchar(255) NOT NULL COMMENT '书本描述',
  `contact` varchar(255) DEFAULT NULL COMMENT '卖家联系方式',
  `icon` text COMMENT '书本图片',
  `salesVolume` int NOT NULL DEFAULT '0' COMMENT '销售量',
  PRIMARY KEY (`id`),
  KEY `ev_bookCity_id_IDX` (`id`,`username`,`bookNumber`,`bookType`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='书城商品购买';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ev_bookcity`
--

LOCK TABLES `ev_bookcity` WRITE;
/*!40000 ALTER TABLE `ev_bookcity` DISABLE KEYS */;
INSERT INTO `ev_bookcity` VALUES (2,'67784046','二仙桥上单','87684224',1,'龙族','20','珍藏首发版，还有江南手绘签名','17685214567',NULL,1),(3,'67784046','二仙桥上单','76662813',1,'完美世界','25','一粒尘可填海，一根草斩尽日月星辰，弹指间天翻地覆。\n群雄并起，万族林立，诸圣争霸，乱天动地。问苍茫大地，谁主沉浮?!\n一个少年从大荒中走出，一切从这里开始……','17864825468',NULL,1);
/*!40000 ALTER TABLE `ev_bookcity` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ev_forum`
--

DROP TABLE IF EXISTS `ev_forum`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ev_forum` (
  `id` int NOT NULL AUTO_INCREMENT,
  `conversation` int NOT NULL COMMENT '话题编号',
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '发布人账号',
  `nickname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '用户昵称',
  `type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '用户类型',
  `time` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '发布时间',
  `user_pic` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '用户头像',
  `thumbsUp` int DEFAULT '0' COMMENT '点赞数量',
  `commentNum` int DEFAULT '0' COMMENT '评论数量',
  `forwardNum` int DEFAULT '0' COMMENT '转发量',
  `content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '会话内容',
  `fabulous` int NOT NULL DEFAULT '1' COMMENT '是否点赞，1为未点赞，0为点赞',
  `forward` int NOT NULL DEFAULT '1' COMMENT '是否转发，1为未转发，0为转发',
  PRIMARY KEY (`id`),
  KEY `forum_conversation_IDX` (`conversation`) USING BTREE,
  KEY `forum_id_IDX` (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='论坛列表数据';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ev_forum`
--

LOCK TABLES `ev_forum` WRITE;
/*!40000 ALTER TABLE `ev_forum` DISABLE KEYS */;
INSERT INTO `ev_forum` VALUES (3,83999626,'67784046','二仙桥上单','1','2023-02-28 15:42:32','5',1,0,0,'听君一席话，如听一番话',1,1);
/*!40000 ALTER TABLE `ev_forum` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ev_forumdetailed`
--

DROP TABLE IF EXISTS `ev_forumdetailed`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ev_forumdetailed` (
  `id` int NOT NULL AUTO_INCREMENT,
  `conversation` int NOT NULL COMMENT '话题列表编号',
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '用户账号',
  `nickname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '用户昵称',
  `type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '用户类型',
  `time` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '发表时间',
  `user_pic` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci COMMENT '用户头像',
  `content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '用户发表评论信息',
  PRIMARY KEY (`id`),
  KEY `ev_forumDetailed_id_IDX` (`id`,`conversation`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='会话列表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ev_forumdetailed`
--

LOCK TABLES `ev_forumdetailed` WRITE;
/*!40000 ALTER TABLE `ev_forumdetailed` DISABLE KEYS */;
INSERT INTO `ev_forumdetailed` VALUES (4,83999626,'12345678','擎天柱','2','2023-02-28 15:45:05','1','关于明天的事儿，后天我们就知道了。');
/*!40000 ALTER TABLE `ev_forumdetailed` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ev_mybook`
--

DROP TABLE IF EXISTS `ev_mybook`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ev_mybook` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '用户名',
  `nickname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '用户昵称',
  `bookNumber` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '书本编号',
  `bookType` varchar(255) NOT NULL COMMENT '书本类型，1为小说，2为漫画，3为历史，4为教材，5为科学，6为人文',
  `bookname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '书本名称',
  `amount` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '付款金额',
  `describe` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '书本描述',
  `contact` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '卖家联系方式',
  `icon` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci COMMENT '书本图片',
  `salesVolume` int NOT NULL DEFAULT '0' COMMENT '销售量',
  `purchase` int NOT NULL DEFAULT '0' COMMENT '商品购买量',
  PRIMARY KEY (`id`),
  KEY `ev_bookCity_id_IDX` (`id`,`username`,`bookNumber`,`bookType`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='我的商品列表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ev_mybook`
--

LOCK TABLES `ev_mybook` WRITE;
/*!40000 ALTER TABLE `ev_mybook` DISABLE KEYS */;
/*!40000 ALTER TABLE `ev_mybook` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ev_myemail`
--

DROP TABLE IF EXISTS `ev_myemail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ev_myemail` (
  `id` int NOT NULL AUTO_INCREMENT,
  `tid` int NOT NULL COMMENT '会话编号',
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '用户账号',
  `nickname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '用户昵称',
  `type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '用户类型',
  `time` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '发送时间',
  `user_pic` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci COMMENT '用户头像',
  `content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '邮箱发送信息内容',
  `issend` int NOT NULL COMMENT '此消息为发送消息还是回复消息，1为发送，2为回复',
  PRIMARY KEY (`id`),
  KEY `ev_deanMailbox_id_IDX` (`id`,`tid`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='我的邮箱模块';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ev_myemail`
--

LOCK TABLES `ev_myemail` WRITE;
/*!40000 ALTER TABLE `ev_myemail` DISABLE KEYS */;
INSERT INTO `ev_myemail` VALUES (4,3329593,'12345678','擎天柱','2','2023-02-28 17:23:10','1','你在想屁吃',2);
/*!40000 ALTER TABLE `ev_myemail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ev_negativemailbox`
--

DROP TABLE IF EXISTS `ev_negativemailbox`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ev_negativemailbox` (
  `id` int NOT NULL AUTO_INCREMENT,
  `tid` int NOT NULL COMMENT '会话编号',
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '用户账号',
  `nickname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '用户昵称',
  `type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '用户类型',
  `time` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '发送时间',
  `user_pic` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci COMMENT '用户头像',
  `content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '邮箱发送信息内容',
  `isreply` int NOT NULL DEFAULT '0' COMMENT '是否回复此消息',
  PRIMARY KEY (`id`),
  KEY `ev_deanMailbox_id_IDX` (`id`,`tid`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='投诉邮箱模块';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ev_negativemailbox`
--

LOCK TABLES `ev_negativemailbox` WRITE;
/*!40000 ALTER TABLE `ev_negativemailbox` DISABLE KEYS */;
INSERT INTO `ev_negativemailbox` VALUES (3,3329593,'67784046','二仙桥上单','1','2023-02-28 17:22:22',NULL,'食堂饭菜咋不免费啊',1);
/*!40000 ALTER TABLE `ev_negativemailbox` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ev_timetable`
--

DROP TABLE IF EXISTS `ev_timetable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ev_timetable` (
  `id` int NOT NULL AUTO_INCREMENT,
  `week` int NOT NULL COMMENT '第几周',
  `row` int NOT NULL COMMENT '第几节课，0为12节，1为34节，2为45节，3为56，4为78',
  `vow` int NOT NULL COMMENT '星期几，0为周一',
  `name` varchar(255) NOT NULL COMMENT '课程名称',
  `address` varchar(255) NOT NULL COMMENT '上课地点',
  `teacher` varchar(100) NOT NULL COMMENT '任课老师',
  PRIMARY KEY (`id`),
  KEY `ev_timetable_id_IDX` (`id`,`week`,`row`,`vow`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='课程表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ev_timetable`
--

LOCK TABLES `ev_timetable` WRITE;
/*!40000 ALTER TABLE `ev_timetable` DISABLE KEYS */;
INSERT INTO `ev_timetable` VALUES (4,1,3,1,'嵌入式设计','A主302','高起强'),(5,1,1,3,'高等数学','A主318','刘培强'),(6,1,2,4,'拳击术','篮球馆','盲僧');
/*!40000 ALTER TABLE `ev_timetable` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ev_users`
--

DROP TABLE IF EXISTS `ev_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ev_users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '用户名',
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '密码',
  `nickname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '用户昵称',
  `type` int DEFAULT NULL COMMENT '用户类型，1为普通用户，2为管理员',
  `user_pic` int NOT NULL DEFAULT '1' COMMENT '头像',
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '邮箱',
  PRIMARY KEY (`id`),
  KEY `ev_users_id_IDX` (`id`,`username`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='用户信息表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ev_users`
--

LOCK TABLES `ev_users` WRITE;
/*!40000 ALTER TABLE `ev_users` DISABLE KEYS */;
INSERT INTO `ev_users` VALUES (1,'12345678','1234567','擎天柱',2,1,'qingtianzhu@qq.com'),(2,'58739174','123456',NULL,1,1,NULL),(3,'67784046','123456','二仙桥上单',1,5,'1818@qq.com');
/*!40000 ALTER TABLE `ev_users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-02-28 17:33:24
