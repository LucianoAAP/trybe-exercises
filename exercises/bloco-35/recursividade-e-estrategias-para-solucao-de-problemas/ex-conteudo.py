def get_fibonacci_number(n):
    fibonacci = [0, 1]
    for index in range(2, n):
        fibonacci.append(fibonacci[index - 2] + fibonacci[index - 1])
    return fibonacci[n - 1]


def get_reverse(list):
    # list.reverse()
    # return list
    reversed_list = []
    for item in range(len(list) - 1, -1, -1):
        reversed_list.append(item)
    return reversed_list


def get_recursive_sum(n):
    if n == 1:
        return 1
    return n + get_recursive_sum(n - 1)
