def to_camel_case(text):
    string= ""
    if text == string: 
        return text
    arr = text.replace("_", "-").split("-")
    string = arr.pop(0)
    for i in range(len(arr)): 
        string+= arr[i].capitalize()
    return string



#or with a list comprehension: 

def to_camel_case(text): 
    if len(text) == 0: 
        return text
    arr = text.replace("_", "-").split("-")
    string = arr.pop(0) +"".join([i.capitalize() for i in arr])
    return string


print(to_camel_case("a_Pippi_Was-Pippi"))

