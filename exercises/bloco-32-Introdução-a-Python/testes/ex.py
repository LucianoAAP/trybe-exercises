def fizz_buzz(n):
    numbers = []
    number = 0
    for index in range(1, n + 1):
        if index % 3 == 0 and index % 5 == 0:
            number = 'FizzBuzz'
        elif index % 3 == 0:
            number = 'Fizz'
        elif index % 5 == 0:
            number = 'Buzz'
        else:
            number = index
        numbers.append(number)
    return numbers


def get_phone_number(phrase):
    if len(phrase) > 30:
        raise ValueError('Expression with invalid length')
    phone_number = ''
    for char in phrase:
        if char == 'A' or char == 'B' or char == 'C':
            char = 2
        elif char == 'D' or char == 'E' or char == 'F':
            char = 3
        elif char == 'G' or char == 'H' or char == 'I':
            char = 4
        elif char == 'J' or char == 'K' or char == 'L':
            char = 5
        elif char == 'M' or char == 'N' or char == 'O':
            char = 6
        elif char == 'P' or char == 'Q' or char == 'R' or char == 'S':
            char = 7
        elif char == 'T' or char == 'U' or char == 'V':
            char = 8
        elif char == 'W' or char == 'X' or char == 'Y' or char == 'Z':
            char = 9
        elif char in '-01':
            char = char
        else:
            raise ValueError('Invalid character')
        phone_number = f'{phone_number}{char}'
    return phone_number


def validate_email(email):
    first_split = email.split('@')
    if len(first_split) != 2:
        raise ValueError('Email should contain one, and only one, "@"')
    username = first_split[0]
    for char in username:
        if (
            not char.isalpha()
            and not char.isdigit()
            and char not in ['-', '_']
           ):
            raise ValueError('Username should only contain letters,'
                             'digits, dashes or underscores')
    second_split = first_split[1].split('.')
    if len(second_split) != 2:
        raise ValueError('Email should contain one website and one extension')
    website = second_split[0]
    extension = second_split[1]
    if not website.isalpha() and not website.isdigit():
        raise ValueError('Website should only contain letters and digits')
    if len(extension) != 3:
        raise ValueError('Extension should contain exactly 3 characters')
    return 'OK'


def get_valid_emails(emails):
    valid_emails = []
    for email in emails:
        try:
            validate_email(email)
            valid_emails.append(email)
        except ValueError as exception:
            print(exception)
    return valid_emails
