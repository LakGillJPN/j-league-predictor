describe('Play', () => {

  before(() => {
    cy.visit('/#/login')
    cy.get('#email').type(Cypress.env("username"));
    cy.get('[data-testid="password-input"]').type(Cypress.env("password"));
    cy.get('[data-testid="login-button"]').click();
    cy.visit('/#play')

    
  })

  it('Should enter data into checkboxes', () => {
    for (let i = 1; i < 9; i++) {
      cy.get(`:nth-child(${i}) > .predict-game > .scorebox-container > :nth-child(1)`).should('exist');
      cy.get(`:nth-child(${i}) > .predict-game > .scorebox-container > :nth-child(3)`).should('exist');
    }
})


})

