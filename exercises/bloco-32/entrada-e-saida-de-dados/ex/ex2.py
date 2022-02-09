import random

word = random.choice(["xablau", "paturso", "serfgres"])
scrambled_word = "".join(random.sample(word, len(word)))


def game():
    print(scrambled_word)
    for i in range(3):
        guess = input('Qual é a palavra? ')
        if guess == word:
            return print('Acertou!')
    return print(f'A palavra era "{word}"')


game()
