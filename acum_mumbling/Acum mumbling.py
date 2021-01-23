str1 = "abcd"
str2 = "zpglnrxqenuañlsdkfañosdimaisdfasdbf"


def acum(stringy): 
	return_string = ''
	position = 0
	for letter in stringy: 
		position +=1
		letter_string = ''
		letter_string += letter * (position)
		if position == len(stringy): 
			return_string += letter_string.title()
		else: 
			return_string += letter_string.title() +"-"
	return return_string
print(acum(str1))
print(acum(str2))
