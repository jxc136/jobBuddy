export class LoginPage {
  email_textbox = ':nth-child(2) > .form-control'
  password_textbox = ':nth-child(3) > .form-control'
  login_button = '.btn'

  
  enterEmail(email) {
    cy.get(this.email_textbox).type(email)
  }

  enterPassword(password) {
    cy.get(this.password_textbox).type(password)
  }

  clickLogin() {
    cy.get(this.login_button).click()
  }
}