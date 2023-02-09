/// <reference types="cypress" /> ///
import { SignupPage } from './pages/signupPage'

const signup = new SignupPage()

describe('practice tests', () => {
 
  it('shows a signup page', () => {
    cy.visit('http://localhost:3000/signup')
  })

  it('allows user to create an account and redirects to the login page', () => {
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

  it('prevents people creating two account with the same email address', () => {
    cy.visit('http://localhost:3000/signup')
    cy.contains('Sign Up')
    signup.enterFirstname('Bing')
    signup.enterLastname('Bunny')
    signup.enterEmail('pete@example.com')
    signup.enterPassword('AaBb22**')
    cy.get('.btn').should('contain', 'Sign Up')
    cy.get('.btn').click()
    cy.contains('Email already in use')    
  })

  it('users must choose a strong password', () => {
    cy.visit('http://localhost:3000/signup')
    cy.contains('Sign Up')
    signup.enterFirstname('Flopsy')
    signup.enterLastname('Bunny')
    signup.enterEmail('flops@example.com')
    signup.enterPassword('A')
    cy.get('.btn').should('contain', 'Sign Up')
    cy.get('.btn').click()
    cy.contains('Password must contain') 
  })
})