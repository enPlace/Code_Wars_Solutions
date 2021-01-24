
def find_it(seq):
    setlist = list(set(seq))
    for i in setlist: 
    	if seq.count(i)%2 !=0:
    	    return i


print(find_it([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]))
print(find_it ([1,1,2,-2,5,2,4,4,-1,-2,5]))
print(find_it ([20,1,1,2,2,3,3,5,5,4,20,4,5]))
print(find_it ([10]))
print(find_it ([1,1,1,1,1,1,10,1,1,1,1]))