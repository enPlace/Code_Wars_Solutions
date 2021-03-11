"""#Notes for solving:  Easy version! The answer is just n³. 

However, lets do it the long way, just based on what we see in the triangle. 
Note that the nth row has n numbers in it. So the 1st row has 1 number, the 2nd
row has 2, the 3rd row has 3, etc. Total numbers for a triangle of  n rows would
be 1 +2 + 3 ...+n. A triangle of four rows would have  1 + 2 + 3 + 4 = 10
numbers. We can use a simple for loop for this. 



Getting odd number string:  If we need a string of 10 odd numbers, from 1 to 0,
we just filter out  the other 10 even numbers in a string of 20. 

Since the nth row has n numbers, we just get the last n numbers of that string 
and add them together. """

def row_sum_odd_numbers(n):
    numcount = 0
    for i in range (1, n+1): 
        numcount+= i
        #this gives us the total numbers in the array
    return sum([x for x in range(1, (numcount*2)+1, 2)][-n: ])
    #the list comprehension gives us an array of odd numbers of numcount length.
    #we return the sum of the last n numbers of that list.  
 


print(row_sum_odd_numbers(3))