# TESTE DE APP PYTHON
import csv
from datetime import datetime

#declarando a função
def registrar_ponto(nome_funcionario):
    #obter a data e hora momentanea
    agora = datetime.now()
    data_hora = agora.strftime("%Y-%m-%d %H:%M:%S")

    #para abrir o arquivo csv
    with open('pontos.csv', 'a', newline='') as arquivo_csv:
        escritor_csv = csv.writer(arquivo_csv)

        #escrever o nome do funcionário e a data e hora no arquivo csv
        escritor_csv.writerow([nome_funcionario, data_hora])
