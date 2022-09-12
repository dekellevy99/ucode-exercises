from calendar import isleap
from calendar import weekday

print("2010 is leap year: ", isleap(2010))
print("2020 is leap year: ", isleap(2020))

counter = 0
for year in range(2020, 2081):
    if isleap(year):
        counter += 1
print(f"There are {counter} leap years between 2020-2080")

day = weekday(2028, 3, 14)
print(f"March 14, 2028 will be the {day} day of the week")