describe('Can access the mainpage', () => {
  it('passes', () => {
    cy.visit('localhost:3000/')
  })
})