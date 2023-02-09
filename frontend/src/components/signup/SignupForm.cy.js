/// <reference types="cypress" /> ///
describe('SignupForm', () => {
  it('has a firstname field for a user to type in', () => {
    cy.visit('http://localhost:3000/signup')
    cy.contains('Sign Up')
    cy.get(':nth-child(2) > .form-control').type('Bing')
    cy.get(':nth-child(4) > .form-control').type('bing@example.com')
    cy.get(':nth-child(5) > .form-control').type('AbCd12**')
    cy.get('.btn').should('contain', 'Sign Up')

  })
  it('has a lastname field for a user to type in', () => {
    cy.visit('http://localhost:3000/signup')
    cy.contains('Sign Up')
    cy.get(':nth-child(3) > .form-control').type('Bunny')
    cy.get(':nth-child(4) > .form-control').type('bing@example.com')
    cy.get(':nth-child(5) > .form-control').type('AbCd12**')
    cy.get('.btn').should('contain', 'Sign Up')

  })
  it('has an email field for a user to type in', () => {
    cy.visit('http://localhost:3000/signup')
    cy.contains('Sign Up')
    cy.get(':nth-child(4) > .form-control').type('bing@example.com')
  })

  it('has a password field for a user to type in', () => {
    cy.visit('http://localhost:3000/signup')
    cy.get(':nth-child(5) > .form-control').type('AbCd12**')

  });

  it('has a sign up button', () => {
    cy.get('.btn')
      .should('contain', 'Sign Up')
      .and('be.visible')
      .and('be.enabled')
  })
});