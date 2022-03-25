from math import ceil


def get_max_without_instabilities(instances):
    intervals = [0]
    for instance in instances:
        if instance == 0:
            intervals.append(0)
        else:
            intervals[-1] += 1
    return max(intervals)


def shuffle(cards):
    half = ceil(len(cards) / 2)
    first_half = cards[0:half]
    second_half = cards[half:]
    shuffled = []
    for index in range(len(first_half)):
        shuffled.append(first_half[index])
        if index < len(second_half):
            shuffled.append(second_half[index])
    return shuffled


def get_good_product_combination_count(products):
    count = 0
    for index1, product in enumerate(products):
        for index2, product_data in enumerate(products):
            if (
                product_data == product
                and index2 > index1
            ):
                count += 1
    return count


def get_number_of_students_in_library(entries, exits, instant):
    count = 0
    for index in range(len(entries)):
        if entries[index] <= instant and exits[index] >= instant:
            count += 1
    return count


def get_number_of_communicating_servers(array):
    servers = []
    count = 0

    for index1, line in enumerate(array):
        for index2, item in enumerate(line):
            if item == 1:
                servers.append((index1, index2))

    for server in servers:
        if (
            (server[0], server[1] + 1) in servers
            or (server[0], server[1] - 1) in servers
            or (server[0] + 1, server[1]) in servers
            or (server[0] - 1, server[1]) in servers
        ):
            count += 1

    return count
