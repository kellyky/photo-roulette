// untitled.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
//
describe('My First Test', () => {
  it('finds the content "Photo"', () => {
    cy.visit('https://kellyky.github.io/photo-roulette/')

    cy.contains('Photo')
  })
})
