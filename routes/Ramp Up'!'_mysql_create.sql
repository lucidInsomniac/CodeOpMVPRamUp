CREATE TABLE `Inventory` (
	`ord_id` int NOT NULL AUTO_INCREMENT,
	`ord_date` varchar(10),
	`vendor` varchar(20),
	`team` varchar(30),
	`item` varchar(100),
	`size` varchar(10),
	`qty` int NOT NULL,
	`part_ord` varchar(3),
	`full_ord` varchar(3),
	PRIMARY KEY (`ord_id`)
);

