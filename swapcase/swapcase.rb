class String
	def is_upper?
		self == self.upcase
	end

	def is_lower?
		self == self.downcase
	end
end

a = "JavaScript language 1.8"

def swapcase word
	new_word = ""
	word.split("").each do |letter|
		if letter.is_lower?
			new_word += letter.upcase
		elsif letter.is_upper?
			new_word += letter.downcase
		else
			new_word += letter
		end
	end
	puts new_word
end

File.open(ARGV[0]).each_line do |line|
	swapcase(line)
end