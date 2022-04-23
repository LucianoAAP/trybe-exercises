from unicodedata import name


class Employee:
    def __init__(self, id_num, name):
        self.id_num = id_num
        self.name = name


class HashMap:
    def __init__(self):
        self._buckets = [None for i in range(10)]

    def get_address(self, id_num):
        return id_num % 10

    def insert(self, employee):
        address = self.get_address(employee.id_num)
        self._buckets[address] = employee

    def get_value(self, id_num):
        address = self.get_address(id_num)
        return self._buckets[address].name

    def has(self, id_num):
        address = self.get_address(id_num)
        return self._buckets[address] is not None

    def update_value(self, id_num, new_name):
        address = self.get_address(id_num)
        employee = self._buckets[address]
        employee.name = new_name


employees = [(14, "name1"), (23, "name2"), (10, "name3"), (9, "name4")]
registry = HashMap()

for id_num, name in employees:
    employee = Employee(id_num, name)
    registry.insert(employee)

print(registry.get_value(23))
print(registry.get_value(10))
registry.update_value(10, 'name30')
print(registry.get_value(10))

double = {i: i*2 for i in range(3, 21)}

print(double)

def get_char_counter(string):
    counter = {}
    for char in string:
        if char not in counter:
            counter[char] = 1
        else:
            counter[char] += 1
    return counter


for char, count in get_char_counter('xablau').items():
    print(char, count)

for key in double.keys():
    if key % 2 is not 0:
        double[key] = key * 3

print(double)
