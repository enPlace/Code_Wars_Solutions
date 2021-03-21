#standard for loop

def fizzbuzz(n):
    array = list(range(1, n+1))
    for i in array: 
        if i%3 ==0 and i%5 == 0: 
            array[i-1] = "FizzBuzz"
        elif i%5 == 0: 
            array[i-1] = "Buzz"
        elif i%3 == 0: 
            array [i-1] = "Fizz"
    return array


print(fizzbuzz(30))


