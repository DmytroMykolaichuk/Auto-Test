describe('UserMenu',() => {
  beforeEach(() => {
    Cypress.Cookies.preserveOnce('loggedin', 'registered', 'PHPSESSID');
     })
    it('Menu',() => {
        cy.visit('https://rocketpot.io');
        cy.get('#login-button > .btn').click()
        cy.get('#email').type('dmykolaichuk@devforth.io').should('have.value', 'dmykolaichuk@devforth.io');
        cy.get('input[id="password"]').type('dmykolaichuk@devforth.io').should('have.value', 'dmykolaichuk@devforth.io');
        cy.get('button[id="auth-btn"]').should('be.visible').click();
        cy.get('.detail > .btn > .btn-text').should('be.visible').click()
       function User (menu){
         return cy.get('div[class="dropdown gray arrow arrow-right"]').contains(menu).should('be.visible')
       }
       User('Deposit')
       User('Withdraw')
       User('Transactions')
       User('Buy Crypto')
       User('Send a Tip')
       User('Bonus')
       //User('Sportsbook')//<iframe> 
       User('Poker')//<iframe> 
       User('Race')
       User('Vip')
       User('Notifications')
       User('Live Chat')//<iframe> 
       User('Change Password')
       User('Autentification')
       User('Logout')
    })
    it('Deposit',() => {
      cy.get('div[class="dropdown gray arrow arrow-right"]').contains('Deposit').click()//cy.get('.deposit > .item-text').click()
      cy.get('input[class="input-controler"]').should('be.visible')
      cy.get('i[class="r-copy r btn-icon"]').should('be.visible')
      cy.get('button[class="btn small flatblack hSmall cryptobalance-btn"]').should('be.visible')
      cy.get('span[class="header-text"]').should('be.visible').and('have.text', 'Wallet')
      cy.get('canvas[class="qrcode"]').should('be.visible')
      cy.contains('0.0002 BTC').should('be.visible').and('have.text', '0.0002 BTC')
      cy.get('div[class="crypto-title"]').should('be.visible').and('have.text', 'We support the following cryptocurrencies:')
      cy.get('.wrapper > .text').should('be.visible').and('have.text', 'Send any amount more than 0.0002 BTC to the following address. In the case of a non-instant deposit, 1 confirmation is required for completion. For transactions we are using Bitcoin standard. ')
      cy.contains('Withdraw').should('be.visible').click()
      cy.contains('Your Bonus balance will be lost if you withdraw before wagering requirements have been met').should('be.visible').and('have.text', 'Your Bonus balance will be lost if you withdraw before wagering requirements have been met')
      cy.get('label[class="labelText"]').should('be.visible')
      cy.get('input[class="input-controler"]').should('be.visible')
      cy.get('button[class="btn small hMedium round max"]').should('be.visible')
      cy.contains('Select Crypto(real balance)').should('be.visible')
      cy.get('.newCat > .item-text').should('be.visible').click()          
      cy.contains('The destination address you will see in the iframe can differ from the one you have on Rockelpot. The funds will be transferred to your Rocketpot accounts upon successful completion.').should('be.visible')
      cy.get('button[class="btn small orange hMedium fullwidth buy-btn"]').should('be.visible')
      cy.get('button[class="btn small hMedium"]').should('be.visible')
      cy.get(':nth-child(4) > .item-text').should('be.visible').click()
      cy.get('div[class="btn-text"]').should('be.visible')
      //cy.get('button[class="btn small hMedium round min"]').should('be.visible')
      //cy.get('input[class="input-controler"]').should('be.visible')
      cy.get('.header > .r-close').click()
    })
    it('Withdraw', () => {
      cy.get('.detail > .btn > .btn-text').should('be.visible').click()
      cy.get('div[class="dropdown gray arrow arrow-right"]').contains('Withdraw').click()
      cy.get('div[class="text first"]').should('be.visible')
      cy.contains('5-30 minutes').should('be.visible').and('have.text', '5-30 minutes')
      cy.get('.first').should('be.visible').and('have.text', 'Your withdrawal will have 0.00006 subtracted from your remaining balance to cover the fee required to process the transaction')
      cy.get('.text.small').should('be.visible').and('have.text', '* Transactions are usually sent by us immediately and are confirmed in the blockchain within 5-30 minutes')
      cy.get('button[class="btn small orange hMedium withdraw-btn"]').should('be.visible')
      cy.get('label[class="labelText"]').should('be.visible')
      cy.get('.header > .r-close').click()
    })
    it('Buy Crypto',() => {
      cy.get('.detail > .btn > .btn-text').should('be.visible').click();
      cy.get('div[class="dropdown gray arrow arrow-right"]').contains('Buy Crypto').click()
      cy.contains('The destination address you will see in the iframe can differ from the one you have on Rockelpot. The funds will be transferred to your Rocketpot accounts upon successful completion.').should('be.visible').and('have.text', 'The destination address you will see in the iframe can differ from the one you have on Rockelpot. The funds will be transferred to your Rocketpot accounts upon successful completion.')
      cy.get('button[class="btn small orange hMedium fullwidth buy-btn"]').should('be.visible')
      cy.get('button[class="btn small hMedium"]').should('be.visible')
      cy.get('.header > .r-close').should('be.visible').click()
    })
    it('Send a Tip', () => {
      cy.get('.detail > .btn > .btn-text').should('be.visible').click();
      cy.get('div[class="dropdown gray arrow arrow-right"]').contains('Send a Tip').click()
      cy.get('div[class="btn-text center"]').should('be.visible')
      cy.get('button[class="btn small orange hMedium uppercase fullwidth"]').should('be.visible')
      cy.get('button[class="btn small flatblack hSmall cryptobalance-btn"]').should('be.visible')
      cy.get('i[class="r r-arrow btn-arrow down"]').should('be.visible')
      cy.get('.header > .r-close').click()
    })
    it('Transactions', () => {
      cy.get('.detail > .btn > .btn-text').should('be.visible').click()
      cy.get('div[class="dropdown gray arrow arrow-right"]').contains('Transactions').click()
      cy.get('.table-header > .table-row > :nth-child(1)').should('be.visible')
      cy.get('.table-header > .table-row > :nth-child(2)').should('be.visible')
      cy.get('.table-header > .table-row > :nth-child(3)').should('be.visible')
      cy.get('.table-header > .table-row > :nth-child(4)').should('be.visible')
      cy.get(':nth-child(1) > .status > span').should('be.visible')
      cy.contains('Withdrawal History').should('be.visible').click();
      cy.get('.table-header > .table-row > :nth-child(1)').should('be.visible')
      cy.get('.table-header > .table-row > :nth-child(2)').should('be.visible')
      cy.get('.table-header > .table-row > :nth-child(3)').should('be.visible')
      cy.get('.table-header > .table-row > :nth-child(4)').should('be.visible')
      cy.get('.table-header > .table-row > :nth-child(5)').should('be.visible')
      cy.contains('Confirmed').should('be.visible')
      cy.contains('Game History').should('be.visible').click()
      cy.get('.table-header > .table-row > :nth-child(1)').should('be.visible')
      cy.get('.table-header > .table-row > :nth-child(2)').should('be.visible')
      cy.get('.table-header > .table-row > :nth-child(3)').should('be.visible')
      cy.get('.table-header > .table-row > :nth-child(4)').should('be.visible')
      cy.get('.table-header > .table-row > :nth-child(5)').should('be.visible')
      cy.get('.table-header > .table-row > :nth-child(6)').should('be.visible')
    })
    it('Bonus', () => {
      cy.get('.detail > .btn > .btn-text').should('be.visible').click();
      cy.get('div[class="dropdown gray arrow arrow-right"]').contains('Bonus').click()
      cy.get('body').then($body => {
        if($body.find('div.header .close-icon') == true){
            cy.get('div.header .close-icon').click();
        }else{
            cy.log('phone bonus not found')
          }
        })
      cy.contains('Active Bonus').should('be.visible')
      cy.contains('Available Bonuses').should('be.visible')
      cy.contains('Bonus Code Activation').should('be.visible')
      cy.get('input[class="input-controler"]').should('be.visible')
      cy.contains('Bonus History').should('be.visible')
    })
    //it('Sportsbook', () => {
      //cy.get('.detail > .btn > .btn-text').should('be.visible').wait(2000).click();
      //cy.get('div[class="dropdown gray arrow arrow-right"]').contains('Sportsbook').click()
      //cy.get('div[class="fullscreen"]').should('be.visible')
    //})
    it('Poker' , () => {
      cy.get('.detail > .btn > .btn-text').should('be.visible').click();
      cy.get('div[class="dropdown gray arrow arrow-right"]').contains('Poker').click()
      cy.get('.frame').should('be.visible')
    })
   it('Race' , () => {
     cy.get('.detail > .btn > .btn-text').should('be.visible').click()
     cy.get('div[class="dropdown gray arrow arrow-right"]').contains('Race').click()
     cy.get('h3[class="section"]').should('be.visible').and('have.text', 'How does it work?Terms and Conditions')
     //cy.get('h3[class="section leader"]').should('be.visible').and('have.text', 'Leaderboard Tournament Ended2022-09-01 at 02-59')
     cy.scrollTo(0, 1200)
     cy.get('.points > :nth-child(1)').should('be.visible').and('have.text', 'Every wager  you make counts  towards the leaderboard.')
     cy.get('.points > :nth-child(2)').should('be.visible').and('have.text', 'Every wager counts as 1 Pointand Equals $1 on the Leaderboard.')
     cy.get('.points > :nth-child(3)').should('be.visible').and('have.text', 'All Prizes will be Paid out in Bitcoin.')
     cy.scrollTo(0, 3000)
     cy.get('.terms').should('be.visible').and('have.text', 'You must have an account in good standing on RocketPot.Giveaway includes both Casino and Sports wager.You must have an account not in violation of our Terms of Service.RocketPot reserves the right to hold void, suspend, cancel, or amend this promotion where it becomes necessary to do so.Entries will be declared void if the entrant is found engaging in fraud, misrepresentation, hacking or exploitation.RocketPot reserves the right to perform additional KYC/AML checks as a condition of receiving prize.No RocketPot partners or employees are eligible for prizes.')
     cy.get('img[class="banner"]').should('be.visible')
     cy.get('h2[class="promo-title"]').should('be.visible')
     cy.get('button[class="btn large orange hMedium with-icons accept_round participate-btn"]').should('be.visible')
   })
   it('Vip', () => {
     cy.get('.detail > .btn > .btn-text').should('be.visible').click();
     cy.get('div[class="dropdown gray arrow arrow-right"]').contains('Vip').click()
     cy.get('img[src="https://rocketpot.io/assets/vip_1.628fb30b.png"]').should('be.visible')
     cy.get('.list > :nth-child(1) > .title').should('be.visible').and('have.text', 'VIP Personal Account Manager')
     cy.get(':nth-child(1) > .description').should('be.visible').and('have.text', 'Our dedicated VIP account managers possess a wealth of industry experience and can assist you with all aspects of your account.')
     cy.get('img[src="https://rocketpot.io/assets/vip_2.8bd70830.png"]').should('be.visible')
     cy.contains('Exclusive Bonuses').should('be.visible').and('have.text', 'Exclusive Bonuses')
     cy.contains('Rocketpot believes that variety is the spice of life! As a VIP, you can benefit from rewards that suit your style of play. That`s why your VIP manager is always listening!').should('be.visible').and('have.text', 'Rocketpot believes that variety is the spice of life! As a VIP, you can benefit from rewards that suit your style of play. That`s why your VIP manager is always listening!')
     cy.get('img[src="https://rocketpot.io/assets/vip_3.5e6c52f7.png"]').should('be.visible')
     cy.contains('VIP Events and Hospitality').should('be.visible').and('have.text', 'VIP Events and Hospitality')
     cy.get(':nth-child(3) > .description').should('be.visible').and('have.text', 'With so many world-class events all year round, there is something for everyone! \n Let your account manager know about your lifestyle and preferences — you won`t be \n disappointed!')
     cy.scrollTo(0, 1000)
     cy.get('img[src="https://rocketpot.io/assets/vip_4.1b66cb11.png"]').should('be.visible')
     cy.contains('VIP Special Promotions').should('be.visible').and('have.text', 'VIP Special Promotions')
     cy.contains('That is why Rocketpot VIP players can enjoy enhanced bonuses, VIP newsletters, and exclusive promotions with Rocketpot prizes.').should('be.visible').and('have.text', 'That is why Rocketpot VIP players can enjoy enhanced \n bonuses, VIP newsletters, and exclusive promotions with Rocketpot prizes.')
     cy.get('img[src="https://rocketpot.io/assets/vip_5.f4aeb78a.png"]').should('be.visible')
     cy.contains('Priority Responses to Feedback').should('be.visible').and('have.text', 'Priority Responses to Feedback')
     cy.contains('Customer experience is at the heart of our operations, and we take great pride in listening to our most loyal VIPs and acting upon feedback, please let your VIP manager know! We are always listening.').should('be.visible').and('have.text', 'Customer experience is at the heart of our operations, \n and we take great pride in listening to our most loyal VIPs and acting upon feedback, \n please let your VIP manager know! We are always listening.')
     cy.get('img[src="https://rocketpot.io/assets/vip_6.325d7908.png"]').should('be.visible')
     cy.contains('VIP Gifts').should('be.visible').and('have.text', 'VIP Gifts')
     cy.contains('Everyone loves surprises! That`s why we send our VIP players a mystery parcel from time to time!').should('be.visible').and('have.text', 'Everyone loves surprises! \n That`s why we send our VIP players a mystery parcel from time to time!')
     cy.get('div[class="rules"]').should('be.visible').and('have.text', 'To retain exclusivity, the Rocketpot VIP Program is strictly invitation - only, but the criteria below will give you an idea of what we take into consideration when reviewing accounts for VIP. When your account meets our requirements, a VIP manager will reach out to you.Loyalty - If you have other Casino Accounts, consider making Rocketpot your primary destination. Loyalty is appreciated above all, and will increase your chances of becoming a VIP.Product - Whether you are passionate about Slots, Live Casino or Crash, using a variety of our products can increase your chances.Activity - Players who frequent Rocketpot regularly, and enjoy our services responsibly, are in with a better chance of being spotted.')
   })
   it('Notifications', () => {
     cy.get('.detail > .btn > .btn-text').should('be.visible').click();
     cy.get('div[class="dropdown gray arrow arrow-right"]').contains('Notifications').click()
     cy.contains('Notifications').should('be.visible')
     cy.get('div[class="notifications-list empty"]').should('be.visible')
   })
   it('Live Chat', () => {
    cy.get('.detail > .btn > .btn-text').should('be.visible').click()
    cy.get('div[class="dropdown gray arrow arrow-right"]').contains('Live Chat').wait(1000).click()
    cy.wait(2000)
    const iFrameChat = cy.get('#webWidget').its('0.contentDocument.body').should('be.visible').then(cy.wrap)
    iFrameChat.find('button[aria-label="Minimize widget"]').click({force: true})
    })
   it('Change Password', () => {
     cy.get('.detail > .btn > .btn-text').should('be.visible').click()
     cy.get('div[class="dropdown gray arrow arrow-right"]').contains('Change Password').click()
     cy.get('input[name="old-password"]').should('be.visible')
     cy.get('input[name="new-password"]').should('be.visible')
     cy.get('input[name="new-password-confirm"]').should('be.visible')
     cy.get('button[class="btn small orange hMedium fullwidth changepass-button"]').should('be.visible')
     cy.get('.header > .r-close').should('be.visible').click()
   })
   it('Autentification', () => {
     cy.get('.detail > .btn > .btn-text').should('be.visible').click();
     cy.get('div[class="dropdown gray arrow arrow-right"]').contains('Autentification').click()
     cy.get('.main > .wrapper > :nth-child(1)').should('be.visible').and('have.text', 'To improve your account security we have implemented optional Two Factor Authentication. Use an application like Google Authenticator in order to activate this feature. Scan the QR code with your authenticator app and enter the code you will get below.')
     cy.get('.main > .wrapper > :nth-child(2)').should('be.visible').and('have.text', 'You can backup secret code to restore access in case device lost:')
     cy.get('img[class="qrcode"]').should('be.visible')
     cy.get('input[class="input-controler"]').should('be.visible')
     cy.get('i[class="r-copy r btn-icon"]').should('be.visible')
     cy.get('.header > .r-close').should('be.visible').click()
   })
   it('Logout', () => {
     cy.get('.detail > .btn > .btn-text').should('be.visible').click();
     cy.get('div[class="dropdown gray arrow arrow-right"]').contains('Logout').click()
     cy.get('div[class="main"]').should('be.visible')
     cy.get('button[class="btn small orange hMedium allowHover"]').should('be.visible')
     //cy.get('button[class="btn small hMedium allowHover"]').should('be.visible').click()
     cy.get('button[class="btn small orange hMedium allowHover"]').should('be.visible').click()
   })
})