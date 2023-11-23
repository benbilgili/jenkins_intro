describe('template', () => {
  it('can search in search bar', () => {
    cy.visit('https://www.bbc.co.uk/sport')

    cy.contains('Football').click()

    // Should be on a new URL which
    // includes '/commands/actions'
    cy.url().should('include', '/sport/football')
    cy.get('.orbit-search-button-icon-only').click()
    cy.wait(5000)
    cy.get('#searchInput').type('arsenal')
    cy.get('#searchInput').should('have.value', 'arsenal')
    cy.get('#searchButton').click()
  })
})