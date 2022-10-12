SELECT symptoms_family, COUNT(*) AS NUM_SICK
FROM Patient 
WHERE disease = "cabbage disease"
GROUP BY symptoms_family