const {sendResponse} = require('./functions/index')
const AWS = require('aws-sdk');

const documentClient = new AWS.DynamoDB.DocumentClient();

const listarPlanetas = async () => {
  try {

    const parametros = {
      TableName: process.env.DYNAMO_TABLE_NAME,
    }
    const planetas = await documentClient.scan(parametros).promise()
    return sendResponse(200, {items: planetas.Items})
  } catch (err) {
    console.log(err)
    return sendResponse(500, {message: 'No se pudo listar los planetas'})
  }
}

module.exports = {
  listarPlanetas
}
