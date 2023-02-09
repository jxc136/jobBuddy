import {LoginPage} from './pages/loginPage'

const loginPage = new LoginPage() 

it('Login', () => {
  cy.visit('http://localhost:3000/login')
  loginPage.enterEmail('pete@example.com')
  loginPage.enterPassword('AaBb22**')
  cy.get('.btn').click().should(() => {
    expect(localStorage.getItem('token')).to.be.a("string")
  })
})