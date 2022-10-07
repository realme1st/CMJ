-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: j7a207.p.ssafy.io    Database: ssafy_web_db
-- ------------------------------------------------------
-- Server version	8.0.30

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
-- Table structure for table `tag`
--

DROP TABLE IF EXISTS `tag`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tag` (
  `tag_no` bigint NOT NULL AUTO_INCREMENT,
  `tag_genre` int NOT NULL,
  `tag_name` varchar(255) NOT NULL,
  `tag_type` int NOT NULL,
  PRIMARY KEY (`tag_no`)
) ENGINE=InnoDB AUTO_INCREMENT=341 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tag`
--

LOCK TABLES `tag` WRITE;
/*!40000 ALTER TABLE `tag` DISABLE KEYS */;
INSERT INTO `tag` VALUES (1,0,'현대물',1),(2,0,'실존역사물',1),(3,0,'가상시대물',1),(4,0,'판타지물',1),(5,0,'동양풍',1),(6,0,'서양풍',1),(7,0,'신화물',1),(8,0,'궁정로맨스',1),(9,0,'캠퍼스물',1),(10,0,'학원물',1),(11,0,'무협물',1),(12,0,'백합/GL',1),(13,0,'아카데미',1),(14,0,'헌터물',1),(15,0,'회귀/타임슬립',2),(16,0,'차원이동',2),(17,0,'전생/환생',2),(18,0,'영혼체인지/빙의',2),(19,0,'초능력',2),(20,0,'초월적존재',2),(21,0,'외국인/혼혈',2),(22,0,'남장여자',2),(23,0,'바람둥이',2),(24,0,'역하렘',2),(25,0,'왕족/귀족',2),(26,0,'동거',2),(27,0,'맞선',2),(28,0,'속도위반',2),(29,0,'조직/암흑가',2),(30,0,'법조계',2),(31,0,'메디컬',2),(32,0,'전문직',2),(33,0,'군대물',2),(34,0,'베이비메신저',2),(35,0,'경찰/형사/수사관',2),(36,0,'연예인',2),(37,0,'스포츠물',2),(38,0,'기억상실',2),(39,0,'오해',2),(40,0,'복수',2),(41,0,'시월드',2),(42,0,'신데렐라',2),(43,0,'권선징악',2),(44,0,'천재',2),(45,0,'가이드버스',2),(46,0,'게임빙의',2),(47,0,'공포/괴담',2),(48,0,'인외존재',2),(49,0,'나혼자산다',2),(50,0,'츤데레남',3),(51,0,'조신남',3),(52,0,'평범남',3),(53,0,'뇌섹남',3),(54,0,'능력남',3),(55,0,'재벌남',3),(56,0,'사이다남',3),(57,0,'직진남',3),(58,0,'계략남',3),(59,0,'능글남',3),(60,0,'다정남',3),(61,0,'애교남',3),(62,0,'유혹남',3),(63,0,'절륜남',3),(64,0,'집착남',3),(65,0,'나쁜남자',3),(66,0,'후회남',3),(67,0,'상처남',3),(68,0,'짝사랑남',3),(69,0,'순정남',3),(70,0,'철벽남',3),(71,0,'동정남',3),(72,0,'순진남',3),(73,0,'까칠남',3),(74,0,'냉정남',3),(75,0,'무심남',3),(76,0,'오만남',3),(77,0,'카리스마남',3),(78,0,'존댓말남',3),(79,0,'대형견남',3),(80,0,'연하남',3),(81,0,'사차원남',3),(82,0,'평범녀',4),(83,0,'뇌섹녀',4),(84,0,'능력녀',4),(85,0,'재벌녀',4),(86,0,'사이다녀',4),(87,0,'직진녀',4),(88,0,'계략녀',4),(89,0,'능글녀',4),(90,0,'다정녀',4),(91,0,'애교녀',4),(92,0,'유혹녀',4),(93,0,'절륜녀',4),(94,0,'건어물녀',4),(95,0,'집착녀',4),(96,0,'나쁜여자',4),(97,0,'후회녀',4),(98,0,'상처녀',4),(99,0,'짝사랑녀',4),(100,0,'순정녀',4),(101,0,'철벽녀',4),(102,0,'동정녀',4),(103,0,'순진녀',4),(104,0,'까칠녀',4),(105,0,'냉정녀',4),(106,0,'무심녀',4),(107,0,'도도녀',4),(108,0,'외유내강',4),(109,0,'우월녀',4),(110,0,'걸크러시',4),(111,0,'털털녀',4),(112,0,'엉뚱녀',4),(113,0,'쾌활발랄녀',4),(114,0,'재회물',5),(115,0,'오래된연인',5),(116,0,'첫사랑',5),(117,0,'친구>연인',5),(118,0,'라이벌/앙숙',5),(119,0,'사내연애',5),(120,0,'비밀연애',5),(121,0,'삼각관계',5),(122,0,'갑을관계',5),(123,0,'신분차이',5),(124,0,'계약연애/결혼',5),(125,0,'정략결혼',5),(126,0,'선결혼후연애',5),(127,0,'소유욕/독점욕/질투',5),(128,0,'금단의관계',5),(129,0,'운명적사랑',5),(130,0,'애증',5),(131,0,'단행본',6),(132,0,'연재중',6),(133,0,'연재완결',6),(134,0,'달달물',6),(135,0,'로맨틱코미디',6),(136,0,'잔잔물',6),(137,0,'성장물',6),(138,0,'힐링물',6),(139,0,'애잔물',6),(140,0,'신파',6),(141,0,'추리/미스터리/스릴러',6),(142,0,'피페물',6),(143,0,'육아물',6),(144,0,'여주중심',6),(145,0,'악녀시점',6),(146,0,'이야기중심',6),(147,0,'원작소설',6),(148,0,'웹툰원작',6),(149,1,'현대판타지',1),(150,1,'게임판타지',1),(151,1,'퓨전판타지',1),(152,1,'정통판타지',1),(153,1,'스포츠물',1),(154,1,'일상물',1),(155,1,'던전물',1),(156,1,'모험물',1),(157,1,'기갑판타지',1),(158,1,'대체역사',1),(159,1,'신무협',1),(160,1,'전통무협',1),(161,1,'먼치킨',2),(162,1,'회귀물',2),(163,1,'레이드물',2),(164,1,'성장물',2),(165,1,'연예계',2),(166,1,'전문직',2),(167,1,'생존물',2),(168,1,'좀비물',2),(169,1,'경영물',2),(170,1,'귀환물',2),(171,1,'환생물',2),(172,1,'차원이동물',2),(173,1,'복수물',2),(174,1,'전쟁물',2),(175,1,'학원물',2),(176,1,'하렘물',2),(177,1,'이능력',3),(178,1,'게임시스템',3),(179,1,'만능회사원',3),(180,1,'마법사',3),(181,1,'기사이야기',3),(182,1,'마족이야기',3),(183,1,'마검사',3),(184,1,'진짜군인',3),(185,1,'궁극의검사',3),(186,1,'전사이야기',3),(187,1,'도적/암살자',3),(188,1,'추리/수사물',3),(189,1,'네크로맨서/흑마법사',3),(190,1,'정령사/소환사',3),(191,1,'성직자',3),(192,1,'검객이야기',3),(193,1,'무사의길',3),(194,1,'도사/퇴마사',3),(195,1,'왕자의삶',3),(196,1,'제왕탄생',3),(197,1,'마법도구',3),(198,1,'축구',3),(199,1,'야구',3),(200,1,'통쾌함',4),(201,1,'유쾌함',4),(202,1,'고독함',4),(203,1,'비장함',4),(204,1,'오만함',4),(205,1,'잔잔함',4),(206,1,'서정적',4),(207,2,'가이드버스',1),(208,2,'헌터물',1),(209,2,'현대물',1),(210,2,'시대물',1),(211,2,'SF/미래물',1),(212,2,'동양풍',1),(213,2,'서양풍',1),(214,2,'판타지물',1),(215,2,'추리/스릴러',1),(216,2,'미스터리/오컬트',1),(217,2,'학원/캠퍼스물',1),(218,2,'궁정물',1),(219,2,'구원',2),(220,2,'차원이동/영혼바뀜',2),(221,2,'대학생',2),(222,2,'회귀물',2),(223,2,'전생/환생',2),(224,2,'초능력',2),(225,2,'인외존재',2),(226,2,'복수',2),(227,2,'질투',2),(228,2,'오해/착각',2),(229,2,'외국인',2),(230,2,'왕족/귀족',2),(231,2,'연예계',2),(232,2,'조직/암흑가',2),(233,2,'스포츠',2),(234,2,'리맨물',2),(235,2,'사내연애',2),(236,2,'전문직물',2),(237,2,'정치/사회/재벌',2),(238,2,'할리킹',2),(239,2,'게임물',2),(240,2,'미남공',3),(241,2,'미인공',3),(242,2,'다정공',3),(243,2,'울보공',3),(244,2,'대형견공',3),(245,2,'순진공',3),(246,2,'귀염공',3),(247,2,'호구공',3),(248,2,'헌신공',3),(249,2,'강공',3),(250,2,'냉혈공',3),(251,2,'능욕공',3),(252,2,'무심공',3),(253,2,'능글공',3),(254,2,'까칠공',3),(255,2,'츤데레공',3),(256,2,'집착공',3),(257,2,'광공',3),(258,2,'개아가공',3),(259,2,'복흑/계략공',3),(260,2,'연하공',3),(261,2,'재벌공',3),(262,2,'황제공',3),(263,2,'후회공',3),(264,2,'사랑꾼공',3),(265,2,'순정공',3),(266,2,'짝사랑공',3),(267,2,'상처공',3),(268,2,'절륜공',3),(269,2,'천재공',3),(270,2,'존댓말공',3),(271,2,'미남수',4),(272,2,'병약수',4),(273,2,'미인수',4),(274,2,'다정수',4),(275,2,'순진수',4),(276,2,'명랑수',4),(277,2,'적극수',4),(278,2,'소심수',4),(279,2,'잔망수',4),(280,2,'허당수',4),(281,2,'평범수',4),(282,2,'호구수',4),(283,2,'헌신수',4),(284,2,'강수',4),(285,2,'냉혈수',4),(286,2,'까칠수',4),(287,2,'츤데레수',4),(288,2,'외유내강수',4),(289,2,'단정수',4),(290,2,'무심수',4),(291,2,'우월수',4),(292,2,'군림수',4),(293,2,'유혹수',4),(294,2,'계략수',4),(295,2,'떡대수',4),(296,2,'재벌수',4),(297,2,'연상수',4),(298,2,'중년수',4),(299,2,'순정수',4),(300,2,'짝사랑수',4),(301,2,'상처수',4),(302,2,'굴림수',4),(303,2,'도망수',4),(304,2,'후회수',4),(305,2,'능력수',4),(306,2,'얼빠수',4),(307,2,'소꿉친구',5),(308,2,'친구>연인',5),(309,2,'동거/배우자',5),(310,2,'첫사랑',5),(311,2,'재회물',5),(312,2,'라이벌/열등감',5),(313,2,'배틀연애',5),(314,2,'애증',5),(315,2,'하극상',5),(316,2,'계약',5),(317,2,'금단의관계',5),(318,2,'사제관계',5),(319,2,'신분차이',5),(320,2,'나이차이',5),(321,2,'서브공있음',5),(322,2,'서브수있음',5),(323,2,'리버스',5),(324,2,'단행본',6),(325,2,'연재중',6),(326,2,'연재완결',6),(327,2,'코믹/개그물',6),(328,2,'달달물',6),(329,2,'삽질물',6),(330,2,'일상물',6),(331,2,'힐링물',6),(332,2,'시리어스물',6),(333,2,'사건물',6),(334,2,'성장물',6),(335,2,'잔잔물',6),(336,2,'애절물',6),(337,2,'3인칭시점',6),(338,2,'공시점',6),(339,2,'수시점',6),(340,2,'해외소설',6);
/*!40000 ALTER TABLE `tag` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-10-07 12:01:29
