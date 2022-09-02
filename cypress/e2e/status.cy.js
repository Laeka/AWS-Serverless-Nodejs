describe('Probando status', () => {
  it('Debe de validar el status code exitoso', () => {
    cy.request('planetas')
      .its('status')
      .should('eq', 200)
  })

  it('Debe de validar el status code fallido', () => {
    // Mostrar que esto fallara porque no existe el endpoint pero fallara antes de hacer la asercion
    // Debemos de pasar la propiedad failOnStatusCode
    cy.request({ url: 'planetas/4', failOnStatusCode: false })
      .its('status')
      .should('eq', 404)
  })
})
