describe('Fitur login HRM', () => {
  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  })

  it('TC_LOGIN_001-Login Positive Case', () => {
    cy.get('div.oxd-form-row:nth-child(2) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)').type('Admin')
    cy.get('div.oxd-form-row:nth-child(2) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)').should('have.value', "Admin") //assertion memiliku value Admin
    cy.get('div.oxd-form-row:nth-child(3) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)').type("admin123")
    cy.get('div.oxd-form-row:nth-child(3) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)').should("not.be.null") // assertion harus berisi dengan password
    cy.get('.oxd-button').click('')
    cy.url().should('include', '/dashboard')
    cy.get('.orangehrm-dashboard-grid > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > p:nth-child(2)').should('contain.text', 'Time at Work')
  })
})