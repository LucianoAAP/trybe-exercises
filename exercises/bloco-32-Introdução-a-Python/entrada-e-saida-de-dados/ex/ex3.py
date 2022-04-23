import random

with open('palavras.txt', mode='r') as file:
    words = [line.strip() for line in file]

word = random.choice(words)

scrambled_word = "".join(random.sample(word, len(word)))


def game():
    print(scrambled_word)
    for i in range(3):
        guess = input('Qual é a palavra? ')
        if guess == word:
            return print('Acertou!')
    return print(f'A palavra era "{word}"')


game()
