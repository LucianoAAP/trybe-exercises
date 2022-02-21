class Rectangle:
    def __init__(self, base, height):
        self.base = base
        self.height = height

    def get_area(self):
        return self.base * self.height

    def get_perimeter(self):
        return 2 * (self.base + self.height)
