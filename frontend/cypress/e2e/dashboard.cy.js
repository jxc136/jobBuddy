/// <reference types="cypress" /> ///
import { LoginPage } from "./pages/loginPage"

const loginPage = new LoginPage()

describe('dashboard', () => {
  it('prevents people from visiting the dashboard without logging in', () => {
    cy.visit('http://localhost:3000/')
    cy.url().should('include', 'login')
  })
  it('has a kanban board with columns for different stages of the application process', () => {
    cy.visit('http://localhost:3000/')
    loginPage.login('pete@example.com', 'AaBb22**')
    cy.contains('Bookmarked')
    cy.contains('Applying')
    cy.contains('Applied')
    cy.contains('Interview')
    cy.contains('Offer')
    cy.contains('Unsuccessful')
  })
})