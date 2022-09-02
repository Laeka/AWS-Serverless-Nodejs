# Serverless-AWS-NODEJS API
***
<p>API para crear tu planeta de Star Wars integrada con - Star Wars API [http://swapi.dev]<p>
<p>No te preocupes por buscar toda la informacion del planeta solo deberas elegir el nombre del planeta y su lider<p>

## Requisitos
***
  - node.js - 18.0.0+

## Uso
***
<p>Para el uso del metodo `get` para listar los planetas usar la `url`:<p>
`https://7f1pvf3w37.execute-api.us-west-2.amazonaws.com/planetas`

<p>Para poder crear un planeta por metodo `post` usar la `url`:<p>
`https://7f1pvf3w37.execute-api.us-west-2.amazonaws.com/planeta`
  > Recuerda que deberas mandar el body de tipo json con los siguientes parametros:
    ` {
      "nombre": String, 
      "lider": String
      }
    `

<p>Para listar el solo el producto creado debera usar el metodo `get` y mandar por la `url` el id<p>
`https://7f1pvf3w37.execute-api.us-west-2.amazonaws.com/planetas/id`

<p>Por ultimo para eliminar el planeta debera usar el metodo `delete` en la `url`<p>
`https://7f1pvf3w37.execute-api.us-west-2.amazonaws.com/planetas/id`
  >Recuerda tambien mandar el id

***
## Para mayor detalle puede revisar la documentacion en Swagger: 
[https://7f1pvf3w37.execute-api.us-west-2.amazonaws.com/swagger]

## Note
***
#### Lista de planetas disponibles:
![Todo los planetas que tienes disponibles!](/assets/images/planets-list.jpg "Lista Planetas")

