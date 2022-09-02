"use strict";

module.exports.hello = async (event) => {
  //code here
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Prueba tecnica de AWS con Serverless",
        input: event,
      },
      null,
      2
    ),
  };
};
