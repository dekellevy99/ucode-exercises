USE sql_intro;

UPDATE Dolphin
SET healty = 0
WHERE color = "green" or color = "brown";