RETIRE_AGE = 70


def generate_increase_function(key, amount):
    def increase(object):
        if key in object:
            if isinstance(object[key], (int, float)):
                object[key] += amount
    return increase

employee = {
  "name": "Momo",
  "age": 61,
  "salary": 10000
}

increase_age_by_1 = generate_increase_function("age", 1)
increase_salary_by_1000 = generate_increase_function("salary", 1000)

years_counter = 0
while employee["age"] < RETIRE_AGE:
    increase_age_by_1(employee)
    years_counter += 1
    if years_counter % 2 == 0:
        increase_salary_by_1000(employee)
        
print(employee["salary"])



