class Carta:
    def __init__(self, valor, naipe):
        self.valor = valor
        self.naipe = naipe

    def __repr__(self):
        return '<%s de %s>' % (self.valor, self.naipe)


class Baralho:
    naipes = 'copas ouros espadas paus'.split()
    valores = 'A 2 3 4 5 6 7 8 9 10 J Q K'.split()

    def __init__(self, metodo):
        self._cartas = [
            Carta(valor, naipe)
            for naipe in self.naipes
            for valor in self.valores
        ]
        self.metodo = metodo

    def __len__(self):
        return len(self._cartas)

    def __iter__(self):
        return Baralho_iterator(self._cartas, self.metodo)


class Baralho_iterator:
    def __init__(self, cartas, metodo):
        self.cartas = cartas
        self.position = -1 if metodo == 'inverso' else 0
        self.metodo = metodo

    def __next__(self):
        try:
            carta = self.cartas[self.position]
        except IndexError:
            raise StopIteration()
        else:
            if self.metodo == 'inverso':
                self.position -= 1
            else:
                self.position += 1
            return carta


# card_list = Baralho('inverso').__iter__()

# print(next(card_list))
# print(next(card_list))
