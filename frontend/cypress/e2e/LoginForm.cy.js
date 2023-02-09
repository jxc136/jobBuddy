/// <reference types="cypress" /> ///
import {LoginPage} from './pages/loginPage'

const loginPage = new LoginPage() 

it('shows a login page', () => {
  cy.visit('http://localhost:3000/login')
});

it('allows a user to login in, checks if the token exists and redirects to the login page', () => {
  cy.visit('http://localhost:3000/login')
  loginPage.enterEmail('pete@example.com')
  loginPage.enterPassword('AaBb22**')
  cy.get('.btn').click().should(() => {
    expect(localStorage.getItem('token')).to.be.a("string")
  })
  cy.url().should('include', 'http://localhost:3000')
})