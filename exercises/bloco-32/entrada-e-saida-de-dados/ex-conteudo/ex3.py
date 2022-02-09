with open('estudantes.txt', mode='r') as file:
    failed = [line.split(' ')[0] for line in file
              if int(line.split(' ')[1]) < 6]

with open('reprovados.txt', mode='w') as file:
    for name in failed:
        file.write(f'{name}\n')
