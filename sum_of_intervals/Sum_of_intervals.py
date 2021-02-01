"""Description:
https://www.codewars.com/kata/52b7ed099cdc285c300001cd

Write a function called sum_of_intervals that accepts an array of intervals, and returns the sum of all the interval lengths. 
Overlapping intervals should only be counted once.


Intervals are represented by a pair of integers in the form of an array. The first value of the interval will always be less than the second value. 
Interval example: [1, 5] is an interval from 1 to 5. The length of this interval is 4.
Overlapping Intervals

"""

#We can append a list of all the numbers that occur between any pairs of intervals, and then eliminate
#any repeating numbers using set(). The length of the resulting list will be the sum of intervals. 

def sum_of_intervals (intervals):
    ranges = []
    for pair in intervals: 
        for i in range(pair[0], pair[1]): 
            ranges.append(i)
    return len(set(ranges))


test=    [[1,5],
   [10, 20],
   [1, 6],
   [16, 19],
   [5, 11]]

print(sum_of_intervals(test))


test2 = [(1, 5)]
test3 = [(1, 5), (6, 10)]
test4 = [(1, 5), (1, 5)]
test5 = [(1, 4), (7, 10), (3, 5)]

print(sum_of_intervals(test2))
print(sum_of_intervals(test3))
print(sum_of_intervals(test4))
print(sum_of_intervals(test5))
