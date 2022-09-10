#exercise 1
songs = ["My Heart", "Her Brain", "The Light", "A Shadow", "One Dance", "Two Monkeys", "Happy Jumping"]
playlist = []
playlist.extend(songs[0:5:2])
playlist[2] += " - Together"
playlist.pop(1)
print(playlist)

#exercise 2
print("Don't try to memorize this")
pi_digits = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 8, 9, 7, 9, 3, 2, 3, 8, 4, 6, 2, 6, 4, 3, 3, 8, 3, 2, 7, 9, 5, 0, 2, 8, 8, 4, 1, 9, 7, 1, 6, 9, 3, 9, 9, 3, 7, 5, 1, 0, 5, 8, 2, 0, 9, 7, 4, 9, 4, 4, 5, 9, 2, 3, 0, 7, 8, 1, 6, 4, 0, 6, 2, 8, 6, 2, 0, 8, 9, 9, 8, 6, 2, 8, 0, 3, 4, 8, 2, 5, 3, 4, 2, 1, 1, 7, 0, 6, 7]
print(len(pi_digits))
print(pi_digits.count(6))
print(sum(pi_digits))

#exercise 3
turtle_status = ["sick", "healthy", "healthy", "healthy", "sick", "sick", "healthy", "sick", "healthy", "healthy", "healthy", "healthy", "healthy", "sick"]
num_sick_turtles = turtle_status.count("sick")
num_healthy_turtles = turtle_status.count("health")
print("We have a shell of a problem") if num_sick_turtles > num_healthy_turtles else print("Let's shell-ebrate")

#exercise 4
nums = [2,7,99,100,10, 77, 88, 10, 55,66,7]
num_to_remove = 10
if nums.count(num_to_remove) >= 2:
    first_occurence = nums.index(num_to_remove);
    second_occurence = nums.index(num_to_remove, first_occurence+1)
    nums.pop(second_occurence)
print(nums)