it('login app action', () => {
  cy.visit('http://localhost:3000/login');
  cy.window().then(({localStorage}) => {
    console.log('this is local storage:' + localStorage)
    localStorage.length = 0
  })
})