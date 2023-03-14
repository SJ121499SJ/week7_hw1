def match(dog_string, dog_names):
    print(dog_string.split(" "))
    for name in dog_names:
        if name == dog_string:
            print( f'Match {name}')
        else:
            print( "No Match")


match("Hello Max, my name is Dog, and I have purple eyes!", ["Max","HAS","PuRple","dog"])