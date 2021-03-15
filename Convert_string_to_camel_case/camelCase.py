def to_camel_case(text):
    arr = []
    string= ""
    if text == string: 
        return text
   
    arr = text.replace("_", "-").split("-")

    if text[0].isupper(): 
        for i in range(len(arr)): 
            string +=arr[i].capitalize()
    else: 
        string = arr.pop(0)
        for i in range(len(arr)): 
            string+= arr[i].capitalize()
    return string


    

print(to_camel_case("a_Pippi_Was-Pippi"))

