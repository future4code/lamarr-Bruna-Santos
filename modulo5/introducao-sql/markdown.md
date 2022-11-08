------------------Exercicio 1:
a) 
VARCHAR(255) -> String com no máximo 255 caracteres.
DATE -> Representa uma data (dia, mês e ano)
VARCHAR(6) -> String com no máximo 6 caracteres.

NOT NULL -> A coluna não pode ser nula.

b) Show databases: Informa o nome do seu Schema.
Show tables: Informa o nome de todas as tabelas já criadas.

c) Você consegue visualizar o tipo de dado que foi inserido em cada item na tabela (int, double, text, char...)

-----------------Exercicio 2:

b) O id é uma PRIMARY KEY, não pode ser duplicada. Cada query deve ter o seu próprio ID.

c)Os nomes das colunas estão incompletos quando comparado com os valores inseridos, no caso está faltando inserir a data de nascimento e o gender.

Modelo correto:

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

d) O campo nome não pode ser nulo, ele tem que constar tanto no nome da coluna quanto nos valores.

Modelo correto:
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Antonio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);

e) O valor inserido para a data de aniversário está incorreta, pois seu modelo correto é no formato de string.

Modelo correto:
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

// CRIE MAIS DOIS ATORES:

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Xuxa",
  2000000,
  "1950-02-21", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "007", 
  "Caio Castro",
  120000,
  "1990-01-20", 
  "male"
);

----------- EXERCICIO 3:

a) SELECT * FROM Actor WHERE gender = "female"

b) SELECT salary FROM Actor WHERE name = "Tony Ramos"

c) Resultado = Null, pois nenhum dos atores do banco de dados está com esse item indefinido. 

d) SELECT id, name, salary FROM Actor WHERE salary <= 500000

e) "nome" é desconhecido, pois o correto seria name.

CORRETO:
SELECT id, name from Actor WHERE id = "002"

-------- EXERCICIO 4:

--Filtrando os atores que o nome começam com A ou J:
SELECT id, name from Actor WHERE name LIKE "A%" OR name LIKE "J%"

-- Todos os atores q começam com A ou J e tem o salario maior de 300000:
SELECT * FROM Actor WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000

-- VALOR ESTÁ ENTRE OS DOIS: BETWEEN valor1 AND valor2

a) Ele está procurando todas as informações do atores que o nome começa com a letra A ou J e que tenham um salário maior que 300000.

b) SELECT * FROM Actor WHERE name NOT LIKE "A%" AND salary > 350000

C) SELECT * FROM Actor WHERE name LIKE "%g%" OR name LIKE "%G%"; 

D) SELECT * FROM Actor WHERE (name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%") AND salary between 350000 and 900000; 

---------- EXERCICIO 5:

a) CREATE TABLE Filmes (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL UNIQUE,
    sinopse TEXT NOT NULL,
    data_lancamento DATE NOT NULL,
    avaliacao INT NOT NULL
);

Id: Permitido apenas strings de até 255 caracteres, é o primary key (não pode ser repetida.)
Name: Permitido apenas strings de até 255 caracteres, não pode ser nulo e seu valor tem que ser único (para que não tenha repetição do mesmo filme)
Sinopse: Permitido uma string com quantidades de caracteres quase ilimitados, não pode ser nulo.
Data de lançamento: Precisa ser uma data no formato string "aaaa/mm/dd" e não pode ser nulo.
Avaliação: Precisa ser um número inteiro e não pode ser nulo.

b) INSERT INTO Filmes (id, name, sinopse, data_lancamento, avaliacao)
VALUES(
    "001",
    "Se Eu Fosse Você",
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
    "2006-01-06",
    7
);

c) INSERT INTO Filmes (id, name, sinopse, data_lancamento, avaliacao)
VALUES(
	"002",
	"Doce de mãe",
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
	"2012-12-27",
	10
);

d) INSERT INTO Filmes (id, name, sinopse, data_lancamento, avaliacao)
VALUES(
	"003",
	"Dona Flor e Seus Dois Maridos",
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
	"2017-11-02",
	8
);

e) INSERT INTO Filmes (id, name, sinopse, data_lancamento, avaliacao)
VALUES(
	"004",
	"Central do Brasil",
    "Dora, uma amargurada ex-professora, ganha a vida escrevendo cartas para pessoas analfabetas, que ditam o que querem contar às suas famílias. Ela embolsa o dinheiro sem sequer postar as cartas. Um dia, Josué, o filho de nove anos de idade de uma de suas clientes, acaba sozinho quando a mãe é morta em um acidente de ônibus.",
	"1998-04-03",
	10
);

-------- Exercicio 6:
a) SELECT id, name, avaliacao FROM Filmes WHERE id = "003"
b) SELECT * FROM Filmes WHERE name = "Central do Brasil"
c) SELECT id, name, sinopse FROM Filmes WHERE avaliacao >= 7

------ EXERCICIO 7:

a) SELECT * FROM Filmes WHERE name LIKE "%vida%";
b) SELECT * FROM Filmes WHERE name LIKE "%dona%" OR sinopse LIKE "%dona%";
c) SELECT * FROM Filmes WHERE data_lancamento < "2022-11-08" ; ;
d)SELECT * FROM Filmes WHERE (name LIKE "%dona%" OR sinopse LIKE "%dona%") AND avaliacao > 7;












