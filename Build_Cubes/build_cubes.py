# #Your task is to construct a building which will be a pile of n cubes. The cube 
# at the bottom will have a volume of n^3, the cube above will have volume of (n-1)^3 
# and so on until the top which will have a volume of 1^3.

# You are given the total volume m of the building. Being given m can you find the
#  number n of cubes you will have to build?

# #One way to do this is just to add i**3 to a sum variable, 
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


for i in range(1, 4): 
    print(i)