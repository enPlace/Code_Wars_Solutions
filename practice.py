def cubeFinder(num): 
    cubed = 0
    if num == 0: 
        return -1
    for i in range(num): 
        cubed += i**3
        if cubed == num: 
            return i
        if cubed > num: 
            return -1

print(cubeFinder(9))