const { sendResponse } = require('./functions/index')
const AWS = require('aws-sdk');

const documentClient = new AWS.DynamoDB.DocumentClient();

const listarPlaneta = async event => {
  try {
    const { id } = event.pathParameters
    const parametros = {
      TableName: process.env.DYNAMO_TABLE_NAME,
      KeyConditionExpression: 'id = :id',
      ExpressionAttributeValues: {
        ':id': id
      },
      Select: 'ALL_ATTRIBUTES'
    }

    const data = await documentClient.query(parametros).promise()
    if (data.Count > 0) {
      return sendResponse(200, { item: data.Items })
    } else {
      return sendResponse(404, { message: 'Planeta no encontrado' })
    }
  } catch (err) {
    return sendResponse(500, { message: 'No se pudo realizar la peticion' })
  }
}

module.exports = {
  listarPlaneta
}
