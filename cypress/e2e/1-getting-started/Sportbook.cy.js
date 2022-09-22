describe('Sportbook',() => {
      it('Menu',() => {
          cy.visit('https://rocketpot.io');
          cy.get('div[class="detail-button-text"]').contains('Sportsbook').click();
          cy.get('.promo-text-btns > .btn > .btn-text').click()
          //cy.get('#login-button > .btn').click({force: true})
          cy.get('input[id="email"]').type('dmykolaichuk@devforth.io').should('have.value', 'dmykolaichuk@devforth.io');
          cy.get('input[id="password"]').type('dmykolaichuk@devforth.io').should('have.value', 'dmykolaichuk@devforth.io');
          cy.get('button[id="auth-btn"]').should('be.visible').click();
      })
      it('Sportsbook', () => {
        cy.get('.detail > .btn > .btn-text').should('be.visible').click();
        cy.get('div[class="dropdown gray arrow arrow-right"]').contains('Sportsbook').click()
      })
    })