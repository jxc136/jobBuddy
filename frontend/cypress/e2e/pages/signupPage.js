export class SignupPage {
  firstname_textbox = ':nth-child(2) > .form-control'
  lastname_textbox = ':nth-child(3) > .form-control'
  email_textbox = ':nth-child(4) > .form-control'
  password_textbox = ':nth-child(5) > .form-control'
  signup_button = '.btn'

  enterFirstname(firstname) {
    cy.get(this.firstname_textbox).type(firstname)
  }

  enterLastname(lastname) {
    cy.get(this.lastname_textbox).type(lastname)
  }
  
  enterEmail(email) {
    cy.get(this.email_textbox).type(email)
  }

  enterPassword(password) {
    cy.get(this.password_textbox).type(password)
  }

  clickLogin() {
    cy.get(this.signup_button).click()
  }
}