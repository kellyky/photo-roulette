describe('My First Test', function () => {
  it('finds the link "type"', function () => {
    cy.visit('https://kellyky.github.io/photo-roulette/')
    
    cy.contains('type')
  })
})
