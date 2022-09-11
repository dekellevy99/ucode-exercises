EXIT_COMMAND = "6"
LONG_STRING = 15

def is_palindrome(string):
    return string == string[::-1]

def is_lower(string):
    return string.islower()

def is_all_digits(string):
    return string.isnumeric()

def is_long(string):
    return len(string) > LONG_STRING

def is_empty(string):
    return string == ""

def exit_program():
    print("Exit Successfully :)")
    exit(0)

commands = {
    "1": {
        "description": "Palindrome - check if the input is palindrome",
        "func": is_palindrome
    },

    "2": {
        "description": "Lower - check if all characters in the input are lowercase",
        "func": is_lower
    }, 
    
    "3": {
        "description": "Digit - check if all characters in the input are digits",
        "func": is_all_digits
    },

    "4": {
        "description": f"Long - check if the input length is longer than {LONG_STRING}",
        "func": is_long
    },

    "5": {
        "description": "Empty - check if the input is empty",
        "func": is_empty
    },

    "6": {
        "description": "Exit - Exit successfully from the application",
        "func": exit_program
    },
}

def print_commands():
    print("The available operations are:")
    for command_num, command in commands.items():
        print(command_num + ". " + command["description"])


print("== Welcome ==")
while True:
    print_commands()
    user_command = input("Please enter the number of the operation you choose: ")
    if user_command == EXIT_COMMAND:
        commands[EXIT_COMMAND]["func"]()

    elif user_command in commands:
        user_input = input("Enter an input: ")
        result = commands[user_command]["func"](user_input)
        print("The answer is: ", result)
        
    else:
        print("Wrong command, try again.")



