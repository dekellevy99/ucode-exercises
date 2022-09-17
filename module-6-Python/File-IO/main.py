import json
import csv

example_file = open("example.txt")
groceries = example_file.read().split("\n")
print(groceries)

student_attendance = {}
attendance_file = open("attendance.txt")
studnets_names = attendance_file.read().split("\n")

for name in studnets_names:
    if name in student_attendance:
        student_attendance[name] += 1
    else:
        student_attendance[name] = 1

print(student_attendance)

with open("example.txt", "a") as my_file:
    my_file.write("Pinapples\n")

with open("my_new_file", "w") as new_file:
    new_file.write("bla bla bla 4\n")
    new_file.write("bla bla bla 5\n")
    new_file.write("bla bla bla 6\n")


goodies = ["Barnacle", "Circus", "Rake", "Cherry", "Steam", "Toothpaste", "Knee", "Coat"] 
with open("example.txt", "a") as example_file:
    for goodie in goodies:
        if goodie[0] == "C":
            example_file.write(goodie+'\n')


# the_file = open("turtles.json")
# turtles_data = json.load(the_file)

# print(turtles_data[0]["gender"])

# # with open("turtles.json", "w") as the_file:
# #     turtles_data.append({"test": 0})
# #     json.dump(turtles_data, the_file)


# with open("stam.json", "w") as the_file:
#     data = {"animal": "dog", "price": 100}
#     json.dump(data, the_file)


turtles_file = open("turtles.json")
turtles_data = json.load(turtles_file)

summary_data = {"male": {
                            "total": 0,
                            "alive": 0
                        },
                "female": {
                            "total": 0,
                            "alive": 0
                }
}

for turtle in turtles_data:
    gender = turtle["gender"]
    is_alive = turtle["condition"]["status"] == "alive"
    summary_data[gender]["total"] += 1
    if is_alive:
        summary_data[gender]["alive"] += 1

with open("turtles_summary.json", "w") as summary_file:
    json.dump(summary_data, summary_file)


the_file = open("expenses.csv")
csv_reader = csv.reader(the_file)
print(next(csv_reader))
for row in csv_reader:
    print(row)

# with open("expenses.csv", "a") as the_file:
#     csv_writer = csv.writer(the_file)
#     csv_writer.writerow(["apple", "ipod", 999])


stocks = [
  {"name": "Apple", "price": 246},
  {"name": "Tesla", "price": 328},
  {"name": "Microsoft", "price": 140},
  {"name": "Amazon"},
  {"name": "Lionsgate", "price": 8},
  {"name": "Netflix", "price": 276},
  {"name": "Google"},
  {"name": "Activision", "price": 55},
] 

with open("stocks.csv", "w") as stocks_file:
    csv_writer = csv.writer(stocks_file)
    csv_writer.writerow(["Comapny Name", "Price"])
    for stock in stocks:
        csv_writer.writerow([stock["name"], stock.get("price", 0)])