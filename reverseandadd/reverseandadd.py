def is_palindrome(number):
	return number == int(str(number)[::-1])

def reverse_and_add(number):
	return number + int(str(number)[::-1])

def get_the_solution(number):
	count = 0
	while(not is_palindrome(number)):
		count += 1
		number = reverse_and_add(number)

	return str(count) + " " + str(number)


import sys
test_cases = open(sys.argv[1], 'r')
for test in test_cases:
	print get_the_solution(int(test.strip()))

test_cases.close()

