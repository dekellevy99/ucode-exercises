SELECT s_name
FROM teacher T, student s, student_teacher ST 
WHERE ST.student_id = s_id and ST.teacher_id = t_id and
    t_name = "Foster"