def binary_search_false_iter(array):
    low_index = 0
    high_index = len(array) - 1

    while high_index >= low_index:

        middle_index = (high_index + low_index) // 2

        if array[middle_index] is False:
            high_index = middle_index - 1
        else:
            low_index = middle_index + 1

    return low_index


array1 = [True, True, True, True, False, False, False]
array2 = [True, True, False, False, False, False, False]
print("Saída array1:", binary_search_false_iter(array1))
print("Saída array2:", binary_search_false_iter(array2))
