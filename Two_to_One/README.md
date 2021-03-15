#Two to One 

https://www.codewars.com/kata/5656b6906de340bd1b0000ac/ 



Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string,
the longest possible, containing distinct letters - each taken only once -
coming from s1 or s2. Examples:

a = "xyaabbbccccdefww" b = "xxxxyyyyabklmopq" longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz" longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

#Notes for solving: 
We want to do a few things here. 
1. filter the strings so that the letters occur once.
2. Turn the strings into arrays
3. combine the arrays
4. turn them back into strings. 

In JavaScript, we can filter, convert to an array quite easily with [...new Set()]. 
We can .sort() and .join() after to turn back into a single sorted string. 

In Python, we can do essentially the same thing by using set() and sorted() and 
joining (''.join()) the list we get from that.  