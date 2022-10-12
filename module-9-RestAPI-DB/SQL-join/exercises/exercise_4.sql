SELECT id, survival_rate
FROM Patient as P,
     disease as D 
WHERE P.disease = D.name
ORDER BY id ASC