from stack import Stack


class ParkingLot(Stack):
    def __init__(self):
        super().__init__()

    def push(self, value):
        return super().push(value)

    def remove_car(self, value):
        if super().is_empty():
            return None
        removed = []
        for car in reversed(self._data):
            if car == value:
                super().pop()
                break
            else:
                removed.insert(0, car)
                super().pop()
        for car in removed:
            super().push(car)
        return 'Not parked'


parking_lot = ParkingLot()
parking_lot.push(1)
parking_lot.push(2)
parking_lot.push(3)
parking_lot.remove_car(2)
print(parking_lot._data)
