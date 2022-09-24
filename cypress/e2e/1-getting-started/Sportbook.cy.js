describe('Sportbook',() => {
  it('Menu',() => {
      Cypress.on('uncaught:exception', (err, runnable) => {
          // returning false here prevents Cypress from
          // failing the test
          return false
      })
      cy.visit('https://rocketpot.io');
      cy.get('#login-button > .btn').click()
      //cy.get('div[class="detail-button-text"]').contains('Sportsbook').click();
      //cy.get('.promo-text-btns > .btn > .btn-text').click()
      //{force: true}
      cy.get('input[id="email"]').type('dmykolaichuk@devforth.io').should('have.value', 'dmykolaichuk@devforth.io');
      cy.get('input[id="password"]').type('dmykolaichuk@devforth.io').should('have.value', 'dmykolaichuk@devforth.io');
      cy.get('button[id="auth-btn"]').should('be.visible').click();
      Cypress.on('uncaught:exception', (err, runnable) => {
        // revert assertion of exceptions
        return true
      })
  })
  it('Sportsbook', () => {
    cy.get('.detail > .btn > .btn-text').should('be.visible').click();
    cy.get('div[class="dropdown gray arrow arrow-right"]').contains('Sportsbook').click()
    const iFrameChat = cy.get('body').its('0.contentDocument.body').should('be.visible').then(cy.wrap)
    iFrameChat.find('svg[data-cy="ic-navbar-mybets"]').click({force: true})
  })
})