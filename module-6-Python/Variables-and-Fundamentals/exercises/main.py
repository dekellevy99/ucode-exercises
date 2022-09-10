#exercise 1
print((5 > 2) and False)
print(not ("knife" == "sword"))
print((1 < 2) or (-1 > -1) or not False)
print(not (not True))
print("5th Avenue" != "5th Avenue")
print(52 != "52")

#exercise 2
a = 3
c = 0
b = a
c = a + b
b = 2
a = b
b = c
c = a
a = b + (c + a)
print("a = " + str(a) + "\nb = " + str(b) + "\nc = " + str(c))

#exercise 3
password = "mypassword"
confirm_password = "mypassword"
is_correct = password == confirm_password
print("The password is correct: " + str(is_correct))
