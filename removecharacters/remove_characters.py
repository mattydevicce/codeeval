#Sample code to read in test cases:
def remove_characters(string, remove):
	for char in remove:
		string = string.replace(char, "")

	return string

import sys
test_cases = open(sys.argv[1], 'r')
for test in test_cases:
    
    if not test or test.startswith('#'):
    	continue
    test = test.split(",")
    test[1] = test[1].strip(" ")
    print remove_characters(test[0],test[1])

test_cases.close()




