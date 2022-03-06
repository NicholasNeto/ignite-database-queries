
<h1 align="center"> Ignite Database Queries </h1>

## Descrição do Projeto
<p>
  Projeto que tem como objetivo aprimoramento de conhecimento em database queries typeorm.
  
  
  React e criação de mapas com a biblioteca React Leaflet. 
  Base do código https://blog.rocketseat.com.br/mapas-com-react-usando-leaflet/, o código foi aprimorado utilizando os
  desafios sugeridos e inclusão de testes unitários. 
</p>


<p>

### UsersRepository

- Método **findUserWithGamesById**
    Esse método deve receber o **Id** de um usuário e retornar os dados do usuário encontrado juntamente com os dados de todos os **games** que esse usuário possui.
    
    Exemplo de retorno:
    
    ```jsx
    {
    	id: '81482ac4-29bd-497f-b71a-8ae3b20eca9b',
    	first_name: 'John',
    	last_name: 'Doe',
    	email: 'mail@example.com',
    	created_at: '2021-03-19 19:35:09.877037',
    	updated_at: '2021-03-19 19:35:09.877037',
    	games: [
    		{
    			id: '63a6c35a-ac97-4773-9021-fb93973c8139',
    			title: 'GTA V',
    			created_at: '2021-03-19 19:35:09.877037',
    			updated_at: '2021-03-19 19:35:09.877037',
    		},
    		{
    			id: '74e4fc3b-434d-4452-94eb-27a85dce8d1a',
    			title: 'Among Us',
    			created_at: '2021-03-19 19:35:09.877037',
    			updated_at: '2021-03-19 19:35:09.877037',
    		}
    	]
    }
    ```
    
- Método **findAllUsersOrderedByFirstName**
    
    Esse método deve retornar a listagem de usuários cadastrados em ordem alfabética (**ASC**).
    Lembre-se que aqui deve ser usado **raw query** para a consulta.
    
- Método **findUserByFullName**
    
    Esse método deve receber `first_name` e `last_name` e retornar um usuário que possua os mesmos `first_name` e `last_name`. Aqui você deve encontrar o usuário ignorando se o argumento passado está em caixa alta ou não. 
    
    Por exemplo, suponhamos que existe um usuário onde o `first_name` é `Danilo` e o `last_name` é `Vieira`. O método deve retornar o usuário mesmo que os argumentos passados sejam `daNiLo` para `first_name` e `vIeiRA` para `last_name`. Essa consulta deve ser realizada utilizando **raw query** e você pode buscar pelo uso do **LOWER** no Postgres para resolver esse problema.  

### GamesRepository

- Método **findByTitleContaining**
    
    Esse método deve receber parte do título de um jogo ou o título inteiro e retornar um ou mais jogos que derem match com a consulta. 
    Se o método for chamado com o argumento `"or S"` e existir algum jogo com essa sequência de letras no título, o retorno deve ser feito, como por exemplo o seguinte retorno:
    
    ```jsx
    [
    	{
    		id: '63a6c35a-ac97-4773-9021-fb93973c8139',
    		title: 'Need F**or S**peed: Payback',
    		created_at: '2021-03-19 19:35:09.877037',
    		updated_at: '2021-03-19 19:35:09.877037',
    	},
    	{
    		id: '74e4fc3b-434d-4452-94eb-27a85dce8d1a',
    		title: 'Need F**or S**peed: Underground',
    		created_at: '2021-03-19 19:35:09.877037',
    		updated_at: '2021-03-19 19:35:09.877037',
    	}
    ]
    ```
    
    A consulta também deve ser feita de forma case insensitive, ignorando caixa alta onde no banco não existe. Para exemplo, considerando a busca exemplificada acima, o retorno deve ser o mesmo caso o parâmetro passado seja uma string `"nEEd"`. 
    
    Você pode buscar pelo uso do **ILIKE** no Postgres para resolver esse problema. Lembre-se que aqui deve ser usado **query builder** para realizar a consulta.
    
- Método **countAllGames**
    Esse método deve retornar uma contagem do total de games existentes no banco. Deve ser usada **raw query** para essa consulta.
    
- Método **findUsersByGameId**
    Esse método deve receber o `Id` de um game e retornar uma lista de todos os usuários que possuem o game do `Id` informado. 
    
Exemplo de retorno:

    ```jsx
[
	{
		id: '81482ac4-29bd-497f-b71a-8ae3b20eca9b',
		first_name: 'John',
		last_name: 'Doe',
		email: 'mail@example.com',
		created_at: '2021-03-19 19:35:09.877037',
		updated_at: '2021-03-19 19:35:09.877037'
	},
	{
		id: '75920ac4-32ed-497f-b71a-8ae3c19eca9b',
		first_name: 'Usuário',
		last_name: 'Qualquer',
		email: 'usuarioqualquer@example.com',
		created_at: '2021-03-19 19:35:09.877037',
		updated_at: '2021-03-19 19:35:09.877037'
	}
]
```
</p>

<p>

## Específicação dos testes

Para esse desafio, temos os seguintes testes:

- **[UsersRepository] should be able to find user with games list by user's ID**
    
    Para que esse teste passe, você deve satisfazer o código de acordo com o que é [descrito aqui](https://www.notion.so/Desafio-01-Database-Queries-8d97dae581d5446e97555c43d301ee45#0f1ea9958bb74918a9dfaa116b37bf8c).
    
- **[UsersRepository] should be able to list users ordered by first name**
    
    Para que esse teste passe, você deve satisfazer o código de acordo com o que é [descrito aqui](https://www.notion.so/Desafio-01-Database-Queries-8d97dae581d5446e97555c43d301ee45#0f1ea9958bb74918a9dfaa116b37bf8c).
    
- **[UsersRepository] should be able to find user by full name**
    
    Para que esse teste passe, você deve satisfazer o código de acordo com o que é [descrito aqui.](https://www.notion.so/Desafio-01-Database-Queries-8d97dae581d5446e97555c43d301ee45#0f1ea9958bb74918a9dfaa116b37bf8c)
    
- **[GamesRepository] should be able find a game by entire or partial given title**
    
    Para que esse teste passe, você deve satisfazer o código de acordo com o que é [descrito aqui](https://www.notion.so/Desafio-01-Database-Queries-8d97dae581d5446e97555c43d301ee45#0f1ea9958bb74918a9dfaa116b37bf8c)[.]
    
- **[GamesRepository] should be able to get the total count of games**
    
    Para que esse teste passe, você deve satisfazer o código de acordo com o que é [descrito aqui](https://www.notion.so/Desafio-01-Database-Queries-8d97dae581d5446e97555c43d301ee45#0f1ea9958bb74918a9dfaa116b37bf8c).
    
- **[GamesRepository] should be able to list users who have given game id**
    
    Para que esse teste passe, você deve satisfazer o código de acordo com o que é [descrito aqui](https://www.notion.so/Desafio-01-Database-Queries-8d97dae581d5446e97555c43d301ee45#0f1ea9958bb74918a9dfaa116b37bf8c).
</p>