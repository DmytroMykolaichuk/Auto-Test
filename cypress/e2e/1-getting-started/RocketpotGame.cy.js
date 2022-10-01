describe('Rocketpot Originals', () =>{
    beforeEach(() => {
        Cypress.Cookies.preserveOnce('loggedin', 'registered', 'PHPSESSID');
         })
    const emailPass = 'dmykolaichuk@devforth.io'
    it('Crash Game', () =>{
      cy.visit('https://rocketpot.io/')
      cy.contains('Login').click({force: true})
      cy.get('#email').type(emailPass).should('be.visible').and('have.value', 'dmykolaichuk@devforth.io')
      cy.get('#password').type(emailPass).should('be.visible').and('have.value', 'dmykolaichuk@devforth.io')
      cy.get('#auth-btn').should('be.visible').click()
      cy.contains('Rocketpot Originals').click()
      //let balanceOldCsh = cy.get('.cryptobalance > .btn > .btn-text').invoke('val')
      cy.get('div[class="gameList isGame isShowSidemenu game-list"]').children('a[href="/exclusive-games/crash-game/"]').click()
      //cy.wait(10000)
      let Crash = cy.get('iframe[class="frame"]').its('0.contentDocument.body').should('be.visible').then(cy.wrap)
      Crash.find('button[class="primary square w100 nopadding"]').click({force: true}).wait(5000)
      //cy.reload()
      //let balanceNewCsh = cy.get('.cryptobalance > .btn > .btn-text').invoke('val')
        //if (balanceOldCsh == balanceNewCsh) {
          //  cy.reload()
        //} else {
          //  return false
        //}
        Crash = cy.get('iframe[class="frame"]').its('0.contentDocument.body').should('be.visible').then(cy.wrap)
        Crash.find('button[class="primary large"]', {timeout: 35000}).click({force: true}).wait(20000)
        Crash = cy.get('iframe[class="frame"]').its('0.contentDocument.body').should('be.visible').then(cy.wrap)
        cy. go('back').wait(3000)
        //cy.reload()
        //let balanceNewNewCsh = cy.get('.cryptobalance > .btn > .btn-text').invoke('val')
        //if (balanceNewNewCsh === balanceNewCsh) {
          //cy. go('back')
        //} else {
          //  return false
        //}
    })
    it('Plinko', () => {
        //let balanceOldPl = cy.get('.cryptobalance > .btn > .btn-text').invoke('val')
        cy.get('div[class="gameList isGame isShowSidemenu game-list"]').children('a[href="/exclusive-games/plinko/"]').click()
        cy.wait(10000)
        let plinko = cy.get('iframe[class="frame"]').its('0.contentDocument.body').should('be.visible').then(cy.wrap)
        plinko.find('div[class="tabs"]').contains('Auto').click({force: true})
        plinko = cy.get('iframe[class="frame"]').its('0.contentDocument.body').should('be.visible').then(cy.wrap)
        plinko.find('#place_bet').contains('Start Auto Bet ').click({force: true}).wait(25000)
        //cy.go('back')
        //cy.reload()
        //let balanceNewPl = cy.get('.cryptobalance > .btn > .btn-text').invoke('val')
        //if (balanceOldPl != balanceNewPl) {
        cy.go('back').get('div[class="gameList isGame isShowSidemenu game-list"]').children('a[href="/exclusive-games/wheel/"]').click()
            //} else {
              //  return false
            //}
    })
   
    //it('Wheel', () =>{
      //  cy.get('div[class="gameList isGame isShowSidemenu game-list"]').children('a[href="/exclusive-games/wheel/"]').click()
        //cy.wait(5000).go('back')
    //})
})