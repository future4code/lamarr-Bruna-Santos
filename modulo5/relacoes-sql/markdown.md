------ EXERCICIO 1:
a) A chave estrangeira estabelece o relacionamento entre duas tabelas.
b) INSERT INTO Rating 
VALUES (
"001",
"Achei o final péssimo",
5,
"002"
)

c) Ao inserir um id de filme que não existe ele informa que não foi possivel adicionar ou atualizar uma linha, pois há falha na chave estrangeira.

d) A tabela Movies não tem a columa Rating.


------ EXERCICIO 2:
a) A tabela MovieCast vai relacionar um determinado ator na lista de personagens de um determinado filme através do id de ambos.

b)INSERT INTO MovieCast (movie_id, actor_id)
VALUE(
	"001",
    "002"
);

INSERT INTO MovieCast (movie_id, actor_id)
VALUE(
	"001",
    "001"
);

INSERT INTO MovieCast (movie_id, actor_id)
VALUE(
	"001",
    "006"
);

INSERT INTO MovieCast (movie_id, actor_id)
VALUE(
	"002",
    "006"
);

INSERT INTO MovieCast (movie_id, actor_id)
VALUE(
	"002",
    "007"
);

INSERT INTO MovieCast (movie_id, actor_id)
VALUE(
	"004",
    "007"
);

c) Ao inserir um id de filme ou o id de um ator que não existe ele informa que não foi possivel adicionar ou atualizar uma linha, pois há falha na chave estrangeira.

d) DELETE FROM Actor WHERE id = "007";
Não é possivel excluir ou atualizar pois há uma retrição de chave estrangeira.


------ EXERCICIO 3:

a) O ON significa que ele vai buscar apenas o que tiver presente nas duas tabelas.

b) 