describe('template spec', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/#/login')
  })


  it('allows a user to login', () => {
    cy.get('[data-testid="email"]').should('contain', 'Email:');
    cy.get('[data-testid="email-input"]').type('joelinton@nufc.com');
    cy.get('[data-testid="password-input"]').type('username');
    cy.get('[data-testid="login-button"]').click();
  })
})