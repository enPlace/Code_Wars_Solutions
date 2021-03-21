correct = [1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz",16,17,"Fizz",19,"Buzz","Fizz",22,23,"Fizz","Buzz",26,"Fizz",28,29,"FizzBuzz"]
mine =    [1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"Fizzbuzz",16,17,"Fizz",19,"Buzz","Fizz",22,23,"Fizz","Buzz",26,"Fizz",28,29,"Fizzbuzz"]

for i in range(len(correct)): 
	if correct[i] != mine[i]: 
		print(i)
		print(mine[i], correct[i])