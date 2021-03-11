def row_sum_odd_numbers(n):
    numcount = 0
    for i in range (1, n+1): 
        numcount+= i
    return sum([x for x in range(1, (numcount*2)+1, 2)][-n: ])
 


print(row_sum_odd_numbers(3))