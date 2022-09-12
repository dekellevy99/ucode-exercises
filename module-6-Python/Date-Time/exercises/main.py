import datetime

#exercise 1
time = datetime.datetime.now()
print(time.strftime("%d.%m.%Y - %H.%M.%S.%f"))

#exercise 2
time = datetime.datetime.now()
print("current 1: ", time.strftime("%d.%m.%Y - %H.%M.%S"))
print("current 2: ", time.strftime("%Y.%m.%d - %H.%M.%S"))
print("current 3: ", time.strftime("%Y.%m.%d - %H.%M.%S"))

#exercise 3
time = datetime.datetime.now()
print("current year is: ", time.strftime("%Y"))
print("current day is: ", time.strftime("%A"))

#extension
current_time = datetime.datetime.now()
birth_date = input("Enter birthday in DD-MM-YYYY format: ")
print(birth_date)
birth_date_datetime = datetime.datetime.strptime(birth_date, "%d-%m-%Y")
print("your age is: ", current_time.year - birth_date_datetime.year)