import sys

numbers = input('Digite números naturais separados por vírgula: ')
numbers_list = numbers.split(',')


def get_sum(list):
    sum = 0
    for number in list:
        if number.isdigit() is False:
            return print(
                f"Erro: {number} não é um número natural!", file=sys.stderr)
        else:
            sum += int(number)
    return print(f'Soma: {sum}')


get_sum(numbers_list)
