import re
# Exercise 1 - is palindrome:
is_palindrome = lambda string: string == string[::-1]
print(is_palindrome("aabbaa"))

# Exercise 2 - Reverse Words in a Sentence
reverse_words = lambda string: " ".join(map(lambda word: word[::-1], string.split(" ")))
print(reverse_words("hello world"))

# Exercise 3 - Swap Two Variables
# swap_two_variables = lambda a, b: b, a


# Exercise 4 - Sum Even Items
sum_every_second = lambda lst: sum(lst[1::2])
print(sum_every_second([1, 2, 1, 3, 1]))

# Exercise 5 - Duplicate
duplicate = lambda lst: lst + lst
print(duplicate([1,2,3]))

# Exercise 6 - Change Spaces
change_space = lambda string: string.replace(" ", "@")
print(change_space("You Got It!"))

# Exercise 7 - Number of Spaces
num_of_space = lambda string: len(string.split(" ")) - 1
print(num_of_space("my name is what"))

# Exercise 8 - Number of all Spaces
num_of_all_sapces = lambda string: len(re.findall(r"\s+|\t+|\n", string))
print(num_of_all_sapces("ffds\nfdsdf  fsdfsf    fd"))

# Exercise 9 - Largest Lexicographically
largest_lexic = lambda string: sorted(string.split(" "))[-1]
print(largest_lexic("Imagination is .more important than knowledge"))

# Exercise 10 - Longest Word
longest_word = lambda string: sorted(string.split(" "),
                                            key = lambda word: len(word))[-1]
print(longest_word("If you can't explain it simply you don't understand it well enough"))

# Exercise 11 - Reverse Sentence
reverse_sentence = lambda sentence: sentence[::-1]
print(reverse_sentence("hello world"))

# Exercise 12 - Reverse Word Order
reverse_word_order = lambda sentence: " ".join(sentence.split(" ")[::-1])
print(reverse_word_order("hello dear world"))

# Exercise 13 - Factorial
factorial = lambda num: num*factorial(num-1) if (num > 1) else 1
print(factorial(6))

# Exercise 14 - Fibonacci
fibo = lambda num: fibo(num-1) + fibo(num-2) if(num >= 2) else num
print(fibo(3))

# Exercise 15 - remove duplicate
remove_duplicates = lambda lst: list(set(lst))
print(remove_duplicates([1,2,3,4,4,5,5]))