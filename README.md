### MAGNETO MUTANT FINDER SERVICE

------



#### Levantando la API localmente 

Instalar dependencias `npm install`

Crear archivo .env para variables de entorno `cp .env.example .env`

Completar las variables de entorno para la base de datos en el archivo .env, la base de datos puede ser postgresql o sqlite

Luego puede iniciar la API corrien el comando `npm start`



#### Tests

Para correr los tests basta con ejecutar `npm run test` o `npm run test-report` para ver el detalle y el code coverage


------

#### Mutant service: 

method: POST 

path: /mutant

body: 

```json
{
	dna: [
        "ATGCG",
        "CTGGA",
        "GTACG",
        "AATAC"
    ]
}
```

Devuelve status code 200 para mutantes y 403 para no mutantes



#### Mutant stats service

method: GET 

path: /mutant/stats

response-body: 

```json
{
    "count_mutant_dna": "11",
    "count_human_dna": "17",
    "ratio": "0.65"
}
```





