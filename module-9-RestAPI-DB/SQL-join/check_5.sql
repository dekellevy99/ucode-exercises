SELECT t_name
FROM 
    student as S,
    teacher as T,
    student_teacher as ST
WHERE 
    ST.teacher_id = T.t_id and
    ST.student_id = S.s_id and
    S.s_name = "Leo" and
    T.is_tenured = TRUE