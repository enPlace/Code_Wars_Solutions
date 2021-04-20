def stars():
    print("*")


def multiplier(functionName, num):
    for i in range(num):
        functionName()

multiplier(stars,3)