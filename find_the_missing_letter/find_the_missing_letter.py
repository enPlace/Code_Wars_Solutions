

import string
alphabet = list(string.ascii_lowercase) + list(string.ascii_uppercase)




def find_missing_letter(chars):
	#find the missing letters in a string
	for i in alphabet: 
		if i not in chars and alphabet[alphabet.index(i)-1] in chars and alphabet[alphabet.index(i)+1] in chars: 
			chars.insert(chars.index(alphabet[alphabet.index(i)+1]), i)
			return i



print(find_missing_letter(['O','Q','R','S']))
print((find_missing_letter(['a','b','c','d','f'])))
print(find_missing_letter(['b','d']))