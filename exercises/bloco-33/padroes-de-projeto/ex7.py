class Order:
    def __init__(self, items, credit_card):
        self.items = items
        self.credit_card = credit_card


class Credid_card:
    def __init__(self, name, number, month, year, security_code):
        self.credit_card_name = name
        self.credit_card_number = number
        self.credit_card_month = month
        self.credit_card_year = year
        self.credit_card_security_code = security_code
