// funcion para usar en el retorno de la respuestas 
const sendResponse = (statusCode, body) => {
  const response = {
    statusCode,
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*',
    }
  }
  return response
}

module.exports = {
  sendResponse
}
