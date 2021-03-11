#Sum of Odd Numbers
https://www.codewars.com/kata/55fd2d567d94ac3bc9000064/

Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...

Calculate the row sums of this triangle from the row index (starting at index 1) e.g.:

rowSumOddNumbers(1); // 1
rowSumOddNumbers(2); // 3 + 5 = 8


#Notes for solving: 
Easy version! The answer is just n³. 

However, lets do it the long way, just based on what we see in the triangle. 
Note that the nth row has n numbers in it. So the 1st row has 1 number, the
2nd row has 2, the 3rd row has 3, etc. Total numbers for a triangle of 
n rows would be 1 +2 + 3 ...+n. A triangle of four rows would have 
1 + 2 + 3 + 4 = 10 numbers. We can use a simple for loop for this. 



Getting odd number string: 
If we need a string of 10 odd numbers, from 1 to 0, we just filter out 
the other 10 even numbers in a string of 20. 

Since the nth row has n numbers, we just get the last n numbers of that string 
and add them together. 