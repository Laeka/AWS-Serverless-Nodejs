describe('Probando requests', () => {
  it('Debe de crear un planeta', function () {
    cy.request({
      url: 'planeta',
      method: 'POST',
      body: {
        nombre: 'Mirial',
        lider: 'sadlaeka'
      }
    }).then((response) => {
      expect(response.status).to.eq(201)
      expect(response.body.message).to.eq('Planeta creado satisfactoriamente')
    })
  })
  it('Debemos de validar que se haya creado en la base de datos', () => {
    cy.request('GET', 'planetas').then((response) => {
      console.log(response)
      // valida el ultimo registro creado
      expect(response.body.items[response.body.items.length - 1].nombre).to.eq(
        'Mirial'
      )
    })
  })
})
