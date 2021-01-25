
test1= [ 1, 1, 1, 2, 1, 1]
test2=[ 0, 0, 0.55, 0, 0 ]
test3=[ 3, 10, 3, 3, 3 ]
test4 = list(test1)

#I used set() here for efficiency. 
def find_unique(arr): 
	setlist= list(set(arr))
	for i in setlist: 
		if arr.count(i)== 1:
			return i 
			break 
	else: 
		pass
print(find_unique(test1))



