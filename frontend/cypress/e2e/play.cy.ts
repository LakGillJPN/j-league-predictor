describe('template spec', () => {
  it('passes', () => {
    cy.visit('/#/login')
    cy.get('#email').type(Cypress.env("username"));
    cy.get('[data-testid="password-input"]').type(Cypress.env("password"));
    cy.get('[data-testid="login-button"]').click();
    cy.visit('/#play')
  })
})

