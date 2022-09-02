describe('Probando errores', () => {
  it.only('Debe validar que no lo encuentra la ruta', () => {
    cy.request({
      url: 'http://localhost:3000/no-existe',
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.be.eq(404)
    })
  })
})
