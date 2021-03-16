def camelCase(text): 
    arr = text.replace("-", "_").split("_")
    return arr.pop(0) + "".join([i.capitalize() for i in arr])
  

    



print(camelCase("A-Cat_was-a_kitty-Before"))


