/// <reference types="cypress" /> ///
import { SignupPage } from './pages/signupPage'

const signup = new SignupPage()

describe('practice tests', () => {
 
  it('shows a signup pagevisits the login page', () => {
    cy.visit('http://localhost:3000/signup')
  })

  it('allows user to create an account', () => {
    cy.visit('http://localhost:3000/signup')
    cy.contains('Sign Up')
    // cy.intercept('POST', 'http://localhost:3000/users').as('post')
    signup.enterFirstname('Peter')
    signup.enterLastname('Rabbit')
    signup.enterEmail('pete@example.com')
    signup.enterPassword('AaBb22**')
    cy.get('.btn').should('contain', 'Sign Up')
    cy.get('.btn').click()
  
    // cy.wait('@post').then(interception => {
    //   expect(interception.response.status).to.eq(201)
    // })
    cy.url().should('include', 'http://localhost:3000/login')
    
  })
})