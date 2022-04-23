def blefe(guesses):
    nomes = list(guesses.keys())
    player1 = nomes[0]
    player2 = nomes[1]
    player1_guess = set(guesses[player1])
    player2_guess = set(guesses[player2])
    player1_leftovers = player1_guess.difference(player2_guess)
    player2_leftovers = player2_guess.difference(player1_guess)
    player1_score = max(player1_leftovers) - min(player1_leftovers)
    player2_score = max(player2_leftovers) - min(player2_leftovers)
    if player1_score > player2_score:
        return player1
    elif player2_score > player1_score:
        return player2
    else:
        return "It's a tie"


guesses = {
    'Clara': [0, 1, 5, 9, 10],
    'Marco': [0, 2, 8, 9, 10]
}

print(blefe(guesses))

str = "serdevemuitolegalmasehprecisoestudarbastante"


def biggest_substring_size(string):
    lengths = set()
    characters = set()
    for index, _ in enumerate(string):
        for letter in string[index:]:
            if letter in characters:
                lengths.add(len(characters))
                characters.clear()
                break
            characters.add(letter)
    return max(lengths)


print(biggest_substring_size(str))

