quizzes = [
  {"name": "Guillermo", "quiz1": 80, "quiz2": 85, "quiz3": 82},
  {"name": "Jamie", "quiz1": 78, "quiz2": 72, "quiz3": 80},
  {"name": "Otto", "quiz1": 92, "quiz2": 89, "quiz3": 96},
  {"name": "Christina", "quiz1": 91, "quiz2": 85, "quiz3": 94},
  {"name": "Ceasar", "quiz1": 62, "quiz2": 65, "quiz3": 73},
  {"name": "Barbara", "quiz1": 78, "quiz2": 68, "quiz3": 78},
  {"name": "Rosan", "quiz1": 84, "quiz2": 85, "quiz3": 81},
  {"name": "Marco", "quiz1": 79, "quiz2": 72, "quiz3": 87},
] 

def get_quizes_grades(student):
    return [val for key, val in student.items() if key != "name"]


def calc_avg(grades):
    sum = 0
    for grade in grades:
        sum += grade

    return sum / len(grades)


def create_content_file(studnet):
    grades = get_quizes_grades(studnet)
    avg_grades = calc_avg(grades)

    content = ""
    for index, grade in enumerate(grades, start=1):
        content += f"Quize {index}: {grade}\n"
    content += f"Avg Score: {avg_grades}"

    return content


for studnet in quizzes:
    student_name = studnet["name"]
    file_name = f"{student_name}_final_report.txt"
    with open(file_name, "w") as report_file:
        content = create_content_file(studnet)
        report_file.write(content)