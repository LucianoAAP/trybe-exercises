import requests

users = requests.get('https://api.github.com/users').json()

for user in users:
    print(user['login'], user['url'])
