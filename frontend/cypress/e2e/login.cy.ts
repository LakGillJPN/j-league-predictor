describe('Login', () => {
  beforeEach(() => {
    cy.visit('/#/login')
  })

  it('allows a user to login', () => {
    //cy.get('[data-testid="email"]').should('contain', 'Email:');
    cy.get('#email').type(Cypress.env("username"));
    cy.get('[data-testid="password-input"]').type(Cypress.env("password"));
    cy.get('[data-testid="login-button"]').click();
    cy.get('[data-testid="homepage-test"]');
  })

  it('not allow a user to login with incorrect cred', () => {
    cy.get('#email').type(Cypress.env("username"));
    cy.get('[data-testid="password-input"]').type('fakepass');
    cy.get('[data-testid="login-button"]').click();
    cy.on('window:alert', (str) => {
      expect(str).to.equal(`Incorrect email or password. Please try again.`)
    })
  })
  
})