def main():
    turn_left()
    while facing_north(): 
        north_column()
    while facing_south():
        south_column()


def turn_right():
    turn_left()
    turn_left()
    turn_left()

def move_four():
    for i in range(4):
        move()

def build_column():
    if no_beepers_present():
        put_beeper()
    move()

def build_north_column(): 
    while front_is_clear(): 
        build_column()
    if front_is_blocked():
        turn_right()
        if front_is_clear(): 
            move_four()
            turn_right()
            build_south_column()


def build_south_column(): 
    while front_is_clear(): 
        build_column()
    if front_is_blocked(): 
        turn_left()
        if front_is_clear(): 
            move_four()
            turn_left()
            build_north_column()

















def north_column(): 
    while front_is_clear(): 
        if no_beepers_present(): 
            put_beeper()
        move()
    if front_is_blocked():
        turn_right()
        if front_is_clear(): 
            for i in range(4): 
                move()
            turn_right()

def south_column():
    while front_is_clear(): 
        if no_beepers_present(): 
            put_beeper()
        move()
    if front_is_blocked():
        turn_left()
        if front_is_clear(): 
            for i in range(4):
                move()
            turn_left()
            north_column()