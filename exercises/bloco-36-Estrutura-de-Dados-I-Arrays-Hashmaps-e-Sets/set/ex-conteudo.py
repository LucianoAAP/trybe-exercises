class Conjunto:
    def __init__(self):
        self.list = [False for _ in range(1001)]

    def add(self, item):
        self.list[item] = item

    def __str__(self):
        string = '{'
        for item in self.list:
            if item is not False:
                if string == '{':
                    string = f'{string}{item}'
                else:
                    string = f'{string}, {item}'

        string = string + '}'
        print(string)

    def __contains__(self, item):
        return item in self.list

    def union(self, conjuntoB):
        conjuntoA = self.list.copy()
        for value in conjuntoB:
            if value is not False:
                conjuntoA[value] = value
        return conjuntoA

    def intersection(self, conjuntoB):
        intersection = []
        for value in conjuntoB:
            if value is not False and self.list[value] is not False:
                intersection.append(value)
        return intersection

    def difference(self, conjuntoB):
        diff = []
        for value in self.list:
            if (
                value is not False
                and (conjuntoB[value] is None or conjuntoB[value] is False)
               ):
               diff.append(value)
        return diff

    def issubset(self, conjuntoB):
        subset = True
        for value in self.list:
            if value is not False and value not in conjuntoB:
                subset = False
                break
        return subset

    def issuperset(self, conjuntoB):
        superset = True
        for value in conjuntoB:
            if value is not False and value not in self.list:
                superset = False
                break
        return superset


def find_duplicated(list):
    duplicated = set()
    for number in list:
        if number in duplicated:
            return number
        else:
            duplicated.add(number)


if __name__ == "__main__":
    conjunto = Conjunto()
    values = [0, 10, 100, 1000]
    for value in values:
        conjunto.add(value)
    conjunto.__str__()
    conjunto_a = Conjunto()
    conjunto_b = Conjunto()
    values_a = [i for i in range(1, 11)]
    values_b = [i for i in range(10, 21)]
    for value in values_a:
        conjunto_a.add(value)
    for value in values_b:
        conjunto_b.add(value)
    print(conjunto_a.union(conjunto_b.list))
    print(conjunto_a.intersection(conjunto_b.list))
    print(conjunto_a.difference(conjunto_b.list))
    print(conjunto_a.issubset(conjunto_b.list))
    print(conjunto_a.issuperset(conjunto_b.list))
    print(find_duplicated([1, 3, 2, 4, 5, 1]))
    estudantes = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
    lista1_entregues = ['a', 'd', 'g', 'c']
    lista2_entregues = ['c', 'a', 'f']
    nao_entregaram1 = set(estudantes).difference(set(lista1_entregues))
    entregaram_tudo = set(lista1_entregues).intersection((set(lista2_entregues)))
    entregaram_uma = set(lista1_entregues).union((set(lista2_entregues)))
    entregaram_nada = set(estudantes).difference(set(lista1_entregues), set(lista2_entregues))
    print(f'N??o entregaram l1: {nao_entregaram1}')
    print(f'Entregaram as 2 listas {entregaram_tudo}')
    print(f'Entregaram uma lista {entregaram_uma}')
    print(f'Entregaram nenhuma lista {entregaram_nada}')
