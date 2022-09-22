const ROCKETPOT_URL = 'https://rocketpot.io'

describe('UserMenu',() => {
  beforeEach(() => {
    Cypress.Cookies.preserveOnce('loggedin', 'registered', 'PHPSESSID');
     })
      it('Menu',() => {
          

          cy.visit(ROCKETPOT_URL);
          cy.get('span[class="btn button-gray"]').click()
          cy.get('input[id="email"]').type('dmykolaichuk@devforth.io').should('have.value', 'dmykolaichuk@devforth.io');
          cy.get('input[id="password"]').type('dmykolaichuk@devforth.io').should('have.value', 'dmykolaichuk@devforth.io');
          cy.get('button[id="auth-btn"]').should('be.visible').click();
        })
        //it('Live Chat', () => {
            //cy.get('.detail > .btn > .btn-text').should('be.visible').click()
            //cy.get('div[class="dropdown gray arrow arrow-right"]').contains('Live Chat').wait(1000).click()
            //cy.wait(2000)
            //const iFrameChat = cy.get('#webWidget').its('0.contentDocument.body').should('be.visible').then(cy.wrap)
            //iFrameChat.find('button[aria-label="Minimize widget"]').click({force: true})
            //cy.frameLoaded('#webWidget')
            //cy.iframe('#webWidget').find('button[aria-label="Minimize widget"]').click()
            //cy.frameLoaded('#webWidget')
            //zE('webWidget', 'close');

            //})
  it('crash', () => {
    cy.contains('Rocketpot Originals').click()
    const games_arr = cy.get(".gameList.isGame.isShowSidemenu.game-list").children()
    //games_arr.eq(0).click({force : true}) - for one only 
    // games_arr.its('length').then(len => {
    // //   for(let i = 0; i < len; i++){
    // //     games_arr = cy.get(".gameList.isGame.isShowSidemenu.game-list").children()
    // //     games_arr.eq(i).click()
    // //     cy.wait(3000)
    // //     cy.visit('https://rocketpot.io/providers/exclusive-games/')
    // //     cy.wait(3000)
    // //   }
    // })
    games_arr.each((($el, index, $list) => {
      cy.wait(3000)
      cy.wrap($el).click();
      cy.wait(3000)
      cy.go('back')
    }))
    //games_arr.eq(0).click() //.invoke('attr', 'href').then(href => cy.visit(href))
              //  if(first_el) {
              //   firts_el.nextAll()
              //  }
            //   cy.get('a[href="/exclusive-games/crash-game/"]').click()
  })
})