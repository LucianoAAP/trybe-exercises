class Calculator:
    def sum(x, y):
        return x + y

    def difference(x, y):
        return x - y

    def mult(x, y):
        return x * y

    def division(x, y):
        return x / y


class Elevator:
    def __init__(self):
        self.doors_open = False
        self.floor = 0

    def open_close_doors(self):
        self.doors_open = not self.doors_open

    def go_up(self):
        self.floor += 1

    def go_down(self):
        self.floor -= 1
