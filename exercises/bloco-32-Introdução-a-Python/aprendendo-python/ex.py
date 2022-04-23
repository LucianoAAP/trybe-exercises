import math


def get_biggest(a, b):
    return max(a, b)


def get_average(list):
    sum = 0
    length = len(list)
    for index in list:
        sum += index
    return sum / length


def get_square(n):
    for i in range(n):
        print('*' * n)


def get_biggest_name(list):
    biggest_name = ''
    biggest_length = 0
    for name in list:
        if len(name) > biggest_length:
            biggest_length = len(name)
            biggest_name = name
        elif len(name) == biggest_length:
            biggest_name = f"{biggest_name}, {name}"
    return biggest_name


def get_paints(area):
    liters_needed = area / 3
    cans_needed = math.ceil(liters_needed / 18)
    price = cans_needed * 80
    return (cans_needed, f"R${price},00")


def get_triangle_type(a, b, c):
    if a + b <= c or a + c <= b or b + c <= a:
        return print('Não é triângulo')
    elif a == b and b == c:
        return print('Triângulo equilátero')
    elif a == b or a == c or b == c:
        return print('Triângulo isóceles')
    else:
        return print('Triângulo escaleno')


def get_smallest(list):
    print(min(list))


def get_triangle(n):
    for i in range(n + 1):
        print('*' * i)


def get_sum(n):
    sum = 0
    for i in range(1, n + 1):
        sum += i
    return sum


def get_comb_price(type, volume):
    price = 0
    if type == 'G':
        if volume > 20:
            price = volume * 2.5 * (1 - 0.05)
        else:
            price = volume * 2.5 * (1 - 0.03)
    elif type == 'A':
        if volume > 20:
            price = volume * 2.5 * (1 - 0.06)
        else:
            price = volume * 2.5 * (1 - 0.04)
    return f"R${round(price, 2)}"
