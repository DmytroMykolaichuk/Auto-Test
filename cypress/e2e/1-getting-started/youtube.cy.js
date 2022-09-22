describe('YouTube',() => {

      it('Visit',() => {
          cy.visit('https://www.youtube.com/');
          cy.viewport(1920, 1080)
      })
      it('Search news', () => {
          cy.get('input[id="search"]').should('be.visible').type('tcn')
          cy.get('button[id="search-icon-legacy"]').should('be.visible').click()
          cy.contains('ТСН').should('be.visible').click()
          cy.contains('Телемарафон "Єдині новини" онлайн | 1+1 онлайн | ТСН онлайн | Новини України').should('be.visible').click()
          cy.wait(15000)
          cy.contains('Пропустити оголошення').should('be.visible').click()
      })
    })