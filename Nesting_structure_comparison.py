
"""
https://www.codewars.com/kata/520446778469526ec0000001/solutions/python/me/best_practice
Description:

Complete the function/method (depending on the language) to return true/True when its argument is an array that has the same nesting structures and same corresponding length of nested arrays as the first array.

For example:

# should return True
same_structure_as([ 1, 1, 1 ], [ 2, 2, 2 ] )
same_structure_as([ 1, [ 1, 1 ] ], [ 2, [ 2, 2 ] ] )

# should return False 
same_structure_as([ 1, [ 1, 1 ] ], [ [ 2, 2 ], 2 ] )
same_structure_as([ 1, [ 1, 1 ] ], [ [ 2 ], 2 ] )

# should return True
same_structure_as([ [ [ ], [ ] ] ], [ [ [ ], [ ] ] ] )

# should return False
same_structure_as([ [ [ ], [ ] ] ], [ [ 1, 1 ] ] )


"""


"""
1. if the type of each is not the same from the start, it should fail
2. if they are both lists, and the length of the lists are not the same, it should fail
3. if they are both lists, and there are no lists inside, and the length is the same, 
it should return True
4. We can compare corresponding lists to each other by using recursion and calling 
the function for the key, value in the zipped arrays. If any of the above are false, 
return False, else, return True. 
    """


def same_structure_as(original, other): 
	if type(original) != type(other): 
		return False
	if type(original) is list and type(other) is list: 
		if len(original) != len(other): 
			return False
		count = 0
		for key_original, value_other in zip(original, other): 
			if type(key_original) is list or type(value_other) is list: 
				count +=1
		if count ==0: 
			return True 
		for key_original, value_other in zip(original, other): 
			if not same_structure_as(key_original, value_other): 
				return False
	return True 


print("should return True")
print(same_structure_as([ 1, 1, 1 ], [ 2, 2, 2 ] ))
print(same_structure_as([ 1, [ 1, 1 ] ], [ 2, [ 2, 2 ] ] ))

print(" ")
print("should return False ")
print(same_structure_as([ 1, [ 1, 1 ] ], [ [ 2, 2 ], 2 ] ))
print(same_structure_as([ 1, [ 1, 1 ] ], [ [ 2 ], 2 ] ))

print(" ")

print("should return True")
print(same_structure_as([ [ [ ], [ ] ] ], [ [ [ ], [ ] ] ] ))

print(" ")
print("should return False")
print(same_structure_as([ [ [ ], [ ] ] ], [ [ 1, 1 ] ] ))

print(" ")
print("should return False")
print(same_structure_as([],1))

print(" ")
print("should return True")
print(same_structure_as(1,100))


print("")
print("Should return True")
print(same_structure_as([1,'[',']'],  ['[',']',1]))