array = list(range(1, 7))
for i in array: 
    if i%3 == 0:
        array[i-1] = "hello"
        
print(array)
print(15%3 == 0 and 15%5 == 0)