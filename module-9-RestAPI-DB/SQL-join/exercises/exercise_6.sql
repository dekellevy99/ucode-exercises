SELECT E.name, COUNT(*) AS NUM_SICK
FROM ethnicity As E JOIN Patient P ON p.ethnicity = E.id
WHERE disease = "lettuce disease"
GROUP BY E.name
