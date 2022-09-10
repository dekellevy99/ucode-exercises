from random import randint

number = randint(1, 10)
while True:
    user_guess = int(input("please guess my number: "))
    if user_guess == number:
        print("You Won!")
        break
    elif user_guess > number:
        print("My number is smaller than ", user_guess)
    else:
        print("My number is bigger than ", user_guess)

    