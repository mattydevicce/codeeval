def max_triangle(triangle):
	height = len(triangle)
	greatest = 0
	stop = 1
	current_position = len(triangle[-1])-1
	positions = [0]*len(triangle[-1])
	# while positions[-1] != len(triangle[-1])-1:
	total = 0
	i = 0
	while positions[-1] != len(triangle[-1]):
		i += 1

		for pos in range(0,len(positions)):
			total += triangle[pos][positions[pos]]
		
		if total > greatest:
			greatest = total

		positions[current_position]+=1
		if current_position == stop:
			stop += 1
			current_position = len(triangle[-1])-1
		
		else:
			current_position-=1
		total = 0

	
		


import sys
triangle_list = []
test_cases = open("triangle.txt", 'r')
i = 0
for test in test_cases:
	i += 1
	test = test.split(" ")
	if i < 100:
		test.pop()
	test = map(int, test)
	triangle_list.append(test)
test_cases.close()
max_triangle(triangle_list)
