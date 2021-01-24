
def find_it(seq):
    setlist = list(set(seq))
    for i in setlist: 
    	if seq.count(i)%2 !=0:
    	    return i
    	    