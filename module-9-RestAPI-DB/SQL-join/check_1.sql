USE sql_intro;

SELECT item_purchased, amount, name, industry
FROM company C, transaction T
WHERE C.id = T.company_id;