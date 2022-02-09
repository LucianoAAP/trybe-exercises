import json
import random

with open("pokemons.json") as file:
    pokemons = json.load(file)["results"]

pokemon = random.choice(pokemons)['name']


def game():
    for i in range(len(pokemon)):
        guess = input('Quem é esse pokemon? ')
        if guess == pokemon:
            return print('Acertou!')
        else:
            if i != len(pokemon) - 1:
                print(f'É um {pokemon[:i + 1]}!')
    return print(f'É um {pokemon}!')


game()
