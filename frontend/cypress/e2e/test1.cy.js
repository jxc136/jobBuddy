/// <reference types="cypress" /> ///
describe('practice tests', () => {
  it('visits the website', () => {
    cy.visit('http://localhost:3000')
  })
 
  it('shows a signup pagevisits the login page', () => {
    cy.visit('http://localhost:3000/login')
  })

  it('has a firstname field for a user to type in', () => {
    cy.visit('http://localhost:3000/signup')
    cy.contains('Sign Up')
    cy.get(':nth-child(2) > .form-control').type('Bing')
    cy.get(':nth-child(3) > .form-control').type('Bunny')
    cy.get(':nth-child(4) > .form-control').type('bing@example.com')
    cy.get(':nth-child(5) > .form-control').type('AbCd12**')
    cy.get('.btn').should('contain', 'Sign Up')
    cy.get('.btn').click()


  })
})