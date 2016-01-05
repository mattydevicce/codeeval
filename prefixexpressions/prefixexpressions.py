def eval_expressions(number_list, operator_list):
	total = int(number_list[0])
	for i in range(0,len(operator_list)):
		if operator_list[i] == '+':
			total += int(number_list[i+1])
		elif operator_list[i] == '*':
			total *= int(number_list[i+1])
		else:
			total /= int(number_list[i+1])

	print total

import sys
test_cases = open("pref.txt", 'r')
for test in test_cases:
	test = test.split(" ")
	print len(test)
	print len(test)/2
	operators = test[0:int(len(test)/2)]
	numbers   = test[int(len(test)/2):]
	operators = operators[::-1]

	eval_expressions(numbers, operators)

test_cases.close()
