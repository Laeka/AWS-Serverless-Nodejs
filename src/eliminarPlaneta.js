const { sendResponse } = require('./functions/index')
const AWS = require('aws-sdk');

const documentClient = new AWS.DynamoDB.DocumentClient();

const eliminarPlaneta = async event => {
  try {
    const { id } = event.pathParameters
    const parametros = {
      TableName: process.env.DYNAMO_TABLE_NAME,
      Key: {
        id
      }
    }

    await documentClient.delete(parametros).promise()
    return sendResponse(200, { message: 'Planeta destruido' })
  } catch (err) {
    return sendResponse(500, { message: 'No se puedo eliminar la peticion' })
  }
}

module.exports = {
  eliminarPlaneta
}
