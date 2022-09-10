from random import randint

#exercise 1
names = ["Dekel", "Beni", "Yaron"]
ages = [23, 25, 20]
for i in range(len(names)):
    print(f"{names[i]} is {ages[i]} years old")

#exercise 2
nums = []
for i in range(1, 101):
    nums.append(i)

#exercise 3
sum = 0
for num in nums:
    if num < 20 or num > 80:
        sum += num
print(sum)

#exercise 4
equipment = ["hammer", "ruler", "torch", "scissors", "screwdriver", "scissors", "torch", "hammer", "hammer", "ruler"]
most_common_item = ""
highest_count = 0

for item in equipment:
    count_of_item = equipment.count(item)
    if count_of_item > highest_count:
        most_common_item = item
        highest_count = count_of_item

print("The item that appears the most in the list is " + most_common_item)

#exercise 5 + 6
idle_process_ids = [17, 18, 32, 6, 41, 8, 23, 88, 91]
iters_num = 0
while len(idle_process_ids) > 5:
    random_id = randint(6, 91)
    if random_id in idle_process_ids:
        idle_process_ids.remove(random_id)
    iters_num += 1
print(idle_process_ids)
print("number of iterations: ", iters_num)

#exercise 7
salaries = [1200, 2500, 1800, 1600, 1800, 700, 3200, 1500, 1300, 1300, 850, 1900]
sum = 0
for salary in salaries:
    sum += salary
avg_salary = sum / len(salaries)

above_avg_salaries = [salary for salary in salaries if salary > avg_salary]
sum = 0
for salary in above_avg_salaries:
    sum += salary
print(sum / len(above_avg_salaries))

#exercise 8
lyrics = ["I", "am", "a", "rock,", "I", "am", "an", "island.", "I", "am", "also", "a", "couch,", "a", "mirror,", "and", "I", "am", "best", "known", "for", "being", "a", "letter", "of", "the", "alphabet.", "On", "some", "days,", "I", "am", "everything,", "on", "others", "I", "am", "nothing.", "I", "am", "both", "and", "I", "am", "neither.", "I", "am,", "whatever", "you", "say", "I", "am", "-", "if", "I", "wasn't,", "then", "why", "would", "I", "say", "I", "am?"]
counter = 0
for lyric in lyrics:
    if lyric == 'I':
        counter += 1
print(counter)