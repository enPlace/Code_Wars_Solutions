# #Your task is to construct a building which will be a pile of n cubes. The cube 
# at the bottom will have a volume of n^3, the cube above will have volume of (n-1)^3 
# and so on until the top which will have a volume of 1^3.

# You are given the total volume m of the building. Being given m can you find the
#  number n of cubes you will have to build?

"""One way to do this is just to use a simple for loop and add i**3 to a sum variable. If the sum == our 
# given volume, we can return the value of i and stop our loop. If it is ever bigger than the 
# given volume, we know that it is not possible to build our pile of cubes and have 
# it equal that volume, so we stop our loop and return -1. If it is 0, return -1. """
def find_nb(m):
    sum = 0
    for i in range(1, m+1): 
        sum += i**3
        if sum == m: 
            return i
        if sum > m: 
            return -1
            break
    return -1


print(find_nb(784))


