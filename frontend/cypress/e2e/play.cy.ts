describe('Play', () => {

  beforeEach(() => {
    cy.visit('/#/login')
    cy.get('#email').type(Cypress.env("username"));
    cy.get('[data-testid="password-input"]').type(Cypress.env("password"));
    cy.get('[data-testid="login-button"]').click();
    cy.visit('/#play')
  })

  it('Should enter data into checkboxes', () => {
    cy.get('.scorebox').each(($input) => {
      // Ensure the element is enabled (remove 'disabled' attribute)
     // Need to make a Play-Test page.
  });
})


})

