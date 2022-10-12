USE sql_intro;

SELECT item_purchased, amount, cu.name as customer_name, co.name as comp_name
FROM company co, transaction tr, customer cu
WHERE tr.customer_id = cu.id and tr.company_id = co.id;