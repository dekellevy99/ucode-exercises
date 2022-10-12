use sql_intro;

-- CREATE TABLE Dolphin(
--     name VARCHAR(50) PRIMARY KEY,
--     color VARCHAR(30),
--     height SMALLINT,
--     healty BIT DEFAULT 1
-- );

INSERT INTO Dolphin VALUES("Daron", "black", 10, 1);
INSERT INTO Dolphin VALUES("Avi", "yellow", 1, 1);
INSERT INTO Dolphin VALUES("Dani", "blue", 1, 1);
INSERT INTO Dolphin VALUES("Bigger", "orange", 5, 1);
INSERT INTO Dolphin VALUES("Greeney", "green", 1, 1);
INSERT INTO Dolphin(color, height, healty) VALUES("yellow", 1, 1);


SELECT *
FROM Dolphin
WHERE height > 2