-------- Exercicio 1:
a) ALTER TABLE Actor DROP COLUMN salary;
RESPOSTA: A coluna Salario seria excluída.

b) ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
RESPOSTA: Vai alterar o nome de uma das colunas, no caso a coluna gender vai passar a se chamar sex, e só vai ser permitido strings de até 6 caracteres.

c) ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
RESPOSTA: Se for levar em consideração que o comando da letra b já foi realizado, ele dará algum erro, pois a coluna gender não existe mais.
Agora se não levar isso em consideração, ele irá apenas alterar que agora a coluna gender pode receber uma string de até 255 caracteres, e não mais de apenas 6.

d) ALTER TABLE Actor CHANGE gender gender varchar(100);

--------- Exercicio 2:
a) UPDATE Actor SET name = "Luis Inácio", birth_date = "1945-10-27" WHERE id = "003";

b) UPDATE Actor SET name = "JULIANA PAES" WHERE name = "Juliana Paes";
UPDATE Actor SET name = "Juliana Paes" WHERE name = "JULIANA PAES";

c)UPDATE Actor SET name = "Flavin do pneu", salary= 300000, birth_date= "1998-04-29", gender="male", favorite_ice_cream_flavor = "Flocos", type="Director" where id = "005";


d)0 linha(s) afetada(s) Linha(s) correspondida(s): 0 Alterado: 0 Avisos: 0
Ele não dá nenhum tipo de erro, apenas informa que nenhuma linha sofreu alteração.

------ Exercicio 3:
a) DELETE FROM Actor WHERE name = "Luis Inácio";
No meu banco de dados não tinha mais a Fernanda Montenegro, pois ela já havia sido modificada em outro exercicio.

b) DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;


------- Exercicio 4:

a) SELECT MAX(salary) from Actor;
b)SELECT MIN(salary) from Actor WHERE gender="female";
c) SELECT COUNT(*) from Actor where gender = "female";
d) SELECT SUM(salary) from Actor;

----- Exercicio 5:
a) Ele vai verificar quantos de cada opção existe dentro daquela coluna. 
Nesse exemplo no caso, o genero pode ser female ou male, e ele informa que nessa tabela temos 3 usuários homens e 2 mulheres.

b) SELECT id, name FROM Actor ORDER BY name DESC;

c) SELECT * FROM Actor ORDER BY salary ASC;

d) SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;

E) SELECT AVG (salary) FROM Actor GROUP BY gender;

--- Exercicio 6:



