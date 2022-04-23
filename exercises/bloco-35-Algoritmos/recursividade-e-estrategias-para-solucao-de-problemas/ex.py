def even_numbers_counter(n):
    count = 0
    for number in range(1, n + 1):
        if number % 2 == 0:
            count += 1
    return count


def even_numbers_counter_recursive(n):
    if n == 1:
        return 0
    if n % 2 == 0:
        return 1 + even_numbers_counter_recursive(n - 1)
    else:
        return 0 + even_numbers_counter_recursive(n - 1)


def get_highest_integer(list):
    if len(list) == 1:
        return list[0]
    if list[-2] > list[-1]:
        return get_highest_integer(list[:-1])
    else:
        return get_highest_integer(list[0:len(list) - 2] + [list[-1]])


def get_mdc(x, y):
    def get_divisor(x, y, d):
        if x % d == 0 and y % d == 0:
            return d
        return get_divisor(x, y, d - 1)
    lowest_number = min([x, y])
    if x == 0 or y == 0:
        return '0 is not allowed!'
    return get_divisor(x, y, lowest_number)

# jeito do gabarito:
# def mdc(a, b):
#     if b == 0:
#         return a
#     return mdc(b, a % b)


def is_prime(n):
    def is_divisible(n, d):
        if d == 1:
            return True
        if n % d == 0:
            return False
        else:
            return is_divisible(n, d - 1)
    if type(n) != int or n == 0:
        return 'Invalid entry'
    if n <= 2:
        return True
    return is_divisible(n, n - 1)
