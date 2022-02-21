from cmath import pi


class Rectangle:
    def __init__(self, base, height):
        self.base = base
        self.height = height

    def get_area(self):
        return self.base * self.height

    def get_perimeter(self):
        return 2 * (self.base + self.height)


class Circle:
    def __init__(self, radius):
        self.radius = radius

    def get_area(self):
        return pi * self.radius ** 2

    def get_perimeter(self):
        return 2 * pi * self.radius


class Product:
    def __init__(self, name, price):
        self.name = name
        self.price = price

    def change_price(self, new_price):
        self.price = new_price


class Order:
    def __init__(self, client, products, payment_method, discount):
        self.client = client
        self.products = products
        self.payment_method = payment_method
        self.discount = discount

    def get_total_price(self):
        total_price = 0
        for product in self.products:
            total_price += product.price
        return total_price

    def get_final_price(self):
        return self.get_total_price() * (1 - self.discount)
