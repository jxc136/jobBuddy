import {LoginPage} from './pages/loginPage'

const loginPage = new LoginPage() 

it('Login', () => {
  cy.visit('http://localhost:3000/login')
  loginPage.enterEmail('bing@example.com')
  loginPage.enterPassword('AbCd12**')
  loginPage.clickLogin()
})