// Agregar Planeta
const { sendResponse } = require('./functions/index')
const {getPlanetInfo} = require('./functions/swapi-integration')
const { v4 } = require('uuid')
const AWS = require('aws-sdk');

const documentClient = new AWS.DynamoDB.DocumentClient();

const agregarPlaneta = async (event) => {
  const body = JSON.parse(event.body)
  const date = new Date()
  try {
    const {
      nombre,
      lider
    } = body

    const creado = date.toISOString()
    const editado = date.toISOString()
    const id = v4()
    const planetInfo = await getPlanetInfo(nombre)
    const TableName= process.env.DYNAMO_TABLE_NAME
    const parametros = {
      TableName,
      Item: {
        id,
        creado,
        "diametro": planetInfo.diameter,
        editado,
        "peliculas": planetInfo.films,
        "gravedad": planetInfo.gravity,
        nombre,
        "periodo_orbita": planetInfo.orbital_period,
        "poblacion": planetInfo.population,
        "residentes": planetInfo.residents,
        "periodo_rotacion": planetInfo.rotation_period,
        "superficie_agua": planetInfo.surface_water,
        'terreno': planetInfo.terrain,
        "url": planetInfo.url,
        lider
      },
      ConditionExpression: 'attribute_not_exists(id)'
    }
    await documentClient.put(parametros).promise()
    return sendResponse(201, { message: 'Planeta creado satisfactoriamente' })
  } catch (err) {
    return sendResponse(500, { message: 'No se pudo crear el planeta' })
  }
}

module.exports = {
  agregarPlaneta
}
