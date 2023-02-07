/// <reference types="cypress" /> ///
describe('practice tests', () => {
  it('visits the website', () => {
    cy.visit('http://localhost:3000')
  })
 
  it('visits the login page', () => {
    cy.visit('http://localhost:3000/login')
  })

  it('visits the signup page', () => {
    cy.visit('http://localhost:3000/signup')
    cy.contains('Sign Up')
    cy.get(':nth-child(2) > .form-control').type('Bing')
    cy.get(':nth-child(3) > .form-control').type('Bunny')
    cy.get(':nth-child(4) > .form-control').type('bunbun@example.com')
    cy.get(':nth-child(5) > .form-control').type('FfGg44$$')
    
  })
})