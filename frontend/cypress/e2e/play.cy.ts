describe('Play', () => {

  before(() => {
    cy.visit('/#/login')
    cy.get('#email').type(Cypress.env("username"));
    cy.get('[data-testid="password-input"]').type(Cypress.env("password"));
    cy.get('[data-testid="login-button"]').click();
    cy.visit('/#play')

    
  })

  it('Should check if the the scorebox-container elements exist', () => {
    cy.get('[data-cy="plusHome"]').click({ multiple: true })
    // for (let i = 1; i < 9; i++) {
    //   cy.get(`:nth-child(${i}) > .predict-game > .scorebox-container > .scorebox > #plus-home > .icon-button`).click()
    //   //cy.get(`:nth-child(${i}) > .predict-game > .scorebox-container > .scorebox > #minus-home > .icon-button`).should('exist')
    //   //cy.get(`:nth-child(${i}) > .predict-game > .scorebox-container > .scorebox > #plus-away > .icon-button`).should('exist')
    //   //cy.get(`:nth-child(${i}) > .predict-game > .scorebox-container > .scorebox > #minus-away > .icon-button`).should('exist')
    // }
})




})

