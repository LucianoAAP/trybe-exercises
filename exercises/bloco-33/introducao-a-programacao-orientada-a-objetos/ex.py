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
