import math
from typing import Counter
from abc import ABC, abstractmethod
from cmath import pi
from datetime import datetime
from operator import attrgetter


# ex 1
class Television:
    def __init__(self, size):
        self.size = size
        self.volume_ratio = 1
        self.volume = 50
        self.on: False
        self.channel = 1

    def turn_on_or_off(self):
        self.on = not self.on

    def change_channel(self, new_channel):
        if new_channel < 1 or new_channel > 99:
            raise ValueError('Channel unavailable')
        self.channel = new_channel

    def raise_volume(self):
        if self.volume < 99:
            self.volume += self.volume_ratio

    def lower_volume(self):
        if self.volume > 0:
            self.volume -= self.volume_ratio


# ex 2
class Statistics:
    @classmethod
    def average(cls, list):
        length = len(list)
        sum = 0
        for number in list:
            sum += number
        return sum / length

    @classmethod
    def median(cls, list):
        sorted_list = sorted(list)
        print(sorted_list)
        length = len(sorted_list)
        if length % 2 == 0:
            first_index = int(length / 2 - 1)
            second_index = int(length / 2)
            return (sorted_list[first_index] + sorted_list[second_index]) / 2
        else:
            return sorted_list[math.floor(length / 2)]

    @classmethod
    def mode(cls, list):
        return Counter(list).most_common()[0][0]


# ex 3
class Geometric_figure(ABC):
    @abstractmethod
    def get_area(self):
        raise NotImplementedError

    @abstractmethod
    def get_perimeter(self):
        raise NotImplementedError


class square(Geometric_figure):
    def __init__(self, side):
        self.side = side

    def get_area(self):
        return self.side ** 2

    def get_perimeter(self):
        return 4 * self.side


class Rectangle(Geometric_figure):
    def __init__(self, base, height):
        self.base = base
        self.height = height

    def get_area(self):
        return self.base * self.height

    def get_perimeter(self):
        return 2 * (self.base + self.height)


class Circle(Geometric_figure):
    def __init__(self, radius):
        self.radius = radius

    def get_area(self):
        return pi * self.radius ** 2

    def get_perimeter(self):
        return 2 * pi * self.radius


# ex 4
class Log_manipulator(ABC):
    @classmethod
    @abstractmethod
    def log(cls, msg):
        raise NotImplementedError


class File_log(Log_manipulator):
    @classmethod
    def log(cls, msg):
        with open('log.txt', 'a') as arquivo:
            print(msg, file=arquivo)


class Screen_log(Log_manipulator):
    @classmethod
    def log(cls, msg):
        print(msg)


class Log:
    def __init__(self, manipulators):
        self.__manipulators = set(manipulators)

    def add_manipulator(self, manipulator):
        self.__manipulators.add(manipulator)

    def info(self, msg):
        self.__log('INFO', msg)

    def alert(self, msg):
        self.__log('ALERT', msg)

    def error(self, msg):
        self.__log('ERROR', msg)

    def debug(self, msg):
        self.__log('DEBUG', msg)

    def __log(self, level, msg):
        for manipulator in self.__manipulators:
            manipulator.log(self.__format(level, msg))

    def __format(self, level, msg):
        date = datetime.now().strftime('%d/%m/%Y %H:%M:%S')
        return f"[{level} - {date}]: {msg}"


# ex 5
class Room:
    def __init__(self, number, floor, guest_quantity, price):
        self.number = number
        self.floor = floor
        self.guest_quantity = guest_quantity
        self.price = price
        self.reserved = False


class Guest:
    def __init__(self, name, cpf):
        self.name = name
        self.cpf = cpf


class Reservation:
    def __init__(self, room, guest):
        self.room = room
        self.guest = guest


class Hotel:
    def __init__(self, name, rooms, reservations):
        self.name = name
        self.rooms = rooms
        self.reservations = reservations

    def check_in(self, *guests):
        try:
            room = self.available_rooms(len(guests))[0]
        except (IndexError):
            raise IndexError(
                'There are not enough rooms for that many guests'
            )
        else:
            room.reserved = True
            for guest in guests:
                self.reservations.append(Reservation(room, guest))

    def check_out(self, room):
        room.reserved = False
        self.reservations = [
            reserva
            for reserva in self.reservations
            if reserva.room != room
        ]

    def available_rooms(self, guest_quantity):
        return sorted(
            [
                room
                for room in self.rooms
                if not room.reserved and
                guest_quantity <= room.guest_quantity
            ],
            key=attrgetter('guest_quantity')
        )
