# Desafio Target
## Descrição das Funções

### 1. **Função `sumWithIndex()`**
Calcula a soma de todos os números de 1 até 13.

1. A variável K começa em 0 e, enquanto ela for menor que o index (13), o código entra no laço while
2. A cada iteração, K é incrementado em 1 e o valor de K é adicionado à variável sum.
3. O resultado final é a soma de todos os números de 1 a 13.

### 2. **Função `verifyFibonacci(number)`**
Verifica se o número fornecido pertence à sequência de Fibonacci.

- Como funciona:
Inicializa duas variáveis, first (0) e second (1), que são os primeiros dois números da sequência de Fibonacci.
O laço while continua gerando novos números de Fibonacci até que second seja maior ou igual ao número a ser verificado.
Se o número for igual ao second ou for zero, significa que ele está na sequência de Fibonacci.
Caso contrário, o número não pertence à sequência. 

### 3. **Função `analyzeRevenue(data)`**
Analisa os dados de receita de um determinado período (passados no formato de um array de objetos) e fornece informações como:

Primeiro ocorre uma filtragem de dados, ou seja, filtra os valores maiores que zero com filter(), entretanto para poder gerar uma nova string com apenas valores numericos foi utilizado o map()

- Para menor receita - 
   Calcula o menor valor com Math.min()

- Para maior receita - 
  Calcula com Math.max()
  
- Quantos dias tiveram receita acima da média - 
  Conta quantos dias tiveram receita acima da média com filter()

### 4. **Função `calculatePercentage(revenue)`**
Calcula a porcentagem de cada estado em relação à receita total.

- Total da Receita - Soma todas as receitas usando Object.values() e reduce()
- Porcentagem - Para cada estado, calcula a porcentagem da receita daquele estado dividindo a receita do estado pelo total e multiplicando por 100.

### 5. **Função `reverseString(str)`**
Reverte uma string fornecida.

1. Cria uma variável reversed vazia para armazenar o resultado.
2. O laço for percorre a string de trás para frente, adicionando cada caractere ao resultado final.
3. Após o laço, imprime a string invertida.

## Como Rodar o Código

1. Clone o repositório para sua máquina local:
   ```bash
   git clone https://github.com/Diego-Aesir/DesafioTarget.git

2. Navegue até o diretório do projeto:
   ```bash
   cd DesafioTarget

3. Execute o arquivo desafio.js para rodar as funções:
     ```bash
     node desafio.js

# O resultado será:

- Sum equals to: 91
- 55 - Belongs to the Fibonacci sequence
- Lowest revenue: 373.7838
- Highest revenue: 48924.2448
- Days above average: 10

- SP: 37.53%
- RJ: 20.29%
- MG: 16.17%
- ES: 15.03%
- Others: 10.98%

- Reversed string: egnellahC tegraT
