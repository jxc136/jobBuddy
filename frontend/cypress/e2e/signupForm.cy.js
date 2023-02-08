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
    signup.enterFirstname('Bing')
    signup.enterLastname('Bunny')
    signup.enterEmail('bing@example.com')
    signup.enterPassword('AbCd12**')
    cy.get('.btn').should('contain', 'Sign Up')
    cy.get('.btn').click()
    
  })
})