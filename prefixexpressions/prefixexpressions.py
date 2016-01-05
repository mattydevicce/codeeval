def eval_expressions(number_list, operator_list):
	total = eval(number_list[0])
	for i in range(0,len(operator_list)):
		if operator_list[i] == '+':
			total += eval(number_list[i+1])
		elif operator_list[i] == '*':
			total *= eval(number_list[i+1])
		else:
			total /= eval(number_list[i+1])

	print total

import sys
test_cases = open(sys.argv[1], 'r')
for test in test_cases:
	if len(test) == 0:
		continue
	elif len(test.split(" "))==1:
		test = test.split(" ")
		if float(test[0]):
			print eval(test[0])
	elif len(test.split(" "))==2:
		test = test.split(" ")
		if float(test[0]):
			print eval(test[0])
		elif float(test[1]):
			print eval(test[1])
		else:
			continue
	else:
		test = test.split(" ")
		test[-1] = test[-1].strip()
		operators = test[0:int(len(test)/2)]
		numbers   = test[int(len(test)/2):]
		operators = operators[::-1]

		eval_expressions(numbers, operators)
test_cases.close()
