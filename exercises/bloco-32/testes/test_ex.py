import pytest
from ex import fizz_buzz, get_phone_number, validate_email, get_valid_emails


def test_fizz_buzz():
    assert fizz_buzz(3) == [1, 2, "Fizz"]


def test_get_phone_number_invalid_length():
    with pytest.raises(ValueError, match='Expression with invalid length'):
        get_phone_number('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')


def test_get_phone_number_invalid_character():
    with pytest.raises(ValueError, match='Invalid character'):
        get_phone_number('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')


def test_get_phone_number_works():
    assert get_phone_number('1-HOME-SWEET-HOME') == '1-4663-79338-4663'
    assert get_phone_number('MY-MISERABLE-JOB') == '69-647372253-562'


def test_validate_email_invalid_formats():
    with pytest.raises(ValueError,
                       match='Email should contain one, and only one, "@"'):
        validate_email('email@email@email.com')
    with pytest.raises(ValueError,
                       match='Username should only contain letters,'
                             'digits, dashes or underscores'):
        validate_email('email#@email.com')
    with pytest.raises(ValueError,
                       match='Email should contain one'
                             ' website and one extension'):
        validate_email('email@email.email.com')
    with pytest.raises(ValueError,
                       match='Website should only contain letters and digits'):
        validate_email('email@email#.com')
    with pytest.raises(ValueError,
                       match='Extension should contain exactly 3 characters'):
        validate_email('email@email.comm')


def test_validate_email_working():
    assert validate_email('email@email.com') == 'OK'


def test_get_valid_emails_only_empty():
    assert get_valid_emails(['email@email@email.com']) == []


def test_get_valid_emails_working():
    assert get_valid_emails(
            ["nome@dominio.com", "errad#@dominio.com", "outro@dominio.com"]
           ) == ["nome@dominio.com", "outro@dominio.com"]
