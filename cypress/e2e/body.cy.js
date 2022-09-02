describe('Probando body', () => {
  it('Debe de validar el nombre y el lider', () => {
      cy.request('planetas/11c8b237-4fdc-47d3-ba7b-f9dc46488235').then((response) => {
      expect(response.status).to.be.equal(200)
      expect(response.headers['content-type']).to.be.equal('application/json; charset=utf-8')
      expect(response.body.item[0].nombre).to.be.equal('Tatooine')
      expect(response.body.item[0].lider).to.be.equal('Pato')
    })
  })
})
