describe('Logout', () => {

  beforeEach(() => {
    cy.visit('/#/login')
    cy.get('#email').type(Cypress.env("username"));
    cy.get('[data-testid="password-input"]').type(Cypress.env("password"));
    cy.get('[data-testid="login-button"]').click();
  })


  it('can logout', () => {
    cy.get('#logout').click()
  })
})