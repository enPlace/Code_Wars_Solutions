#Convert string to camel case
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).
Examples

"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"


#Notes for solving. 

1. We have to split by dash and/or underscore. 
2. Will the string have only one or the other or both? 
	Answer: both
3. if str[0] not capitalized, reg camel case
4. if capitalized, upper camel case. 

