from abc import ABC, abstractmethod


class Imposto(ABC):
    @abstractmethod
    def calcular_imposto(self, valor):
        return NotImplementedError


class ISS(Imposto):
    def calcular_imposto(cls, valor):
        return valor * 0.1


class ICMS(Imposto):
    def calcular_imposto(cls, valor):
        return valor * 0.06


class PIS(Imposto):
    def calcular_imposto(cls, valor):
        return valor * 0.0065


class COFINS(Imposto):
    def calcular_imposto(cls, valor):
        return valor * 0.03


class Orcamento:
    def __init__(self, valor):
        self.valor = valor

    def calcular_imposto(self, imposto):
        return imposto().calcular_imposto(self.valor)


orcamento = Orcamento(1000)
print(f"ISS: {orcamento.calcular_imposto(ISS)}")
print(f"ICMS: {orcamento.calcular_imposto(ICMS)}")
