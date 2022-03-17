from Cronometro import Cronometro
from random import shuffle


ordenados = list(range(10000))
inversamente_ordenados = list(reversed(range(10000)))
aleatorios = ordenados[:]  # copia dos ordenados
shuffle(aleatorios)  # embaralha eles


def selection_sort(array):
    for i in range(len(array)):
        minimum = i

        for j in range(i + 1, len(array)):
            if array[j] < array[minimum]:
                minimum = j
        array[minimum], array[i] = array[i], array[minimum]

    return array


def insertion_sort(array):
    for i in range(len(array)):
        current_value = array[i]
        current_position = i
        while (
            current_position > 0
            and array[current_position - 1] > current_value
        ):
            array[current_position] = array[current_position - 1]
            current_position = current_position - 1
        array[current_position] = current_value
    return array


with Cronometro('selection 10000 ordenados'):
    selection_sort(ordenados)
with Cronometro('selection 10000 reversos'):
    selection_sort(inversamente_ordenados)
with Cronometro('selection 10000 aleatorios'):
    selection_sort(aleatorios)

with Cronometro('insertion 10000 ordenados'):
    selection_sort(ordenados)
with Cronometro('insertion 10000 reversos'):
    selection_sort(inversamente_ordenados)
with Cronometro('insertion 10000 aleatorios'):
    selection_sort(aleatorios)

ordenados = list(range(100000))
inversamente_ordenados = list(reversed(range(100000)))
aleatorios = ordenados[:]  # copia dos ordenados
shuffle(aleatorios)  # embaralha eles

with Cronometro('selection 100000 ordenados'):
    selection_sort(ordenados)
with Cronometro('selection 100000 reversos'):
    selection_sort(inversamente_ordenados)
with Cronometro('selection 100000 aleatorios'):
    selection_sort(aleatorios)

with Cronometro('insertion 100000 ordenados'):
    selection_sort(ordenados)
with Cronometro('insertion 100000 reversos'):
    selection_sort(inversamente_ordenados)
with Cronometro('insertion 100000 aleatorios'):
    selection_sort(aleatorios)

ordenados = list(range(1000000))
inversamente_ordenados = list(reversed(range(1000000)))
aleatorios = ordenados[:]  # copia dos ordenados
shuffle(aleatorios)  # embaralha eles

with Cronometro('selection 1000000 ordenados'):
    selection_sort(ordenados)
with Cronometro('selection 1000000 reversos'):
    selection_sort(inversamente_ordenados)
with Cronometro('selection 1000000 aleatorios'):
    selection_sort(aleatorios)

with Cronometro('insertion 1000000 ordenados'):
    selection_sort(ordenados)
with Cronometro('insertion 1000000 reversos'):
    selection_sort(inversamente_ordenados)
with Cronometro('insertion 1000000 aleatorios'):
    selection_sort(aleatorios)
