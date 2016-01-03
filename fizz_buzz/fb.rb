File.open(ARGV[0]).each_line do |line|

	line_array = line.split(" ").map(&:to_i)
    output = ''
	for i in 1..line_array[2]

		if i % line_array[0] == 0 && i % line_array[1] == 0
			output += 'FB'
		elsif i % line_array[0] == 0
			output += 'F'
		elsif i % line_array[1] == 0
			output += 'B'
		else
			output += i.to_s
		end
		output += ' '
	end
	puts output	
end