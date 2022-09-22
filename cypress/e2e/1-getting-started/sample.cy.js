require('dotenv').config();


let accountLogin = `illuminati${Date.now()}@devforth.io`;
let secondAccLogin = `Vat${Date.now()}@devforth.io`;
let restorePassAcc = Cypress.env('RESTORE_PASS_LOGIN') + '+' + `${Date.now()}@devforth.io`;

const getIframeDocument = () => {
  return cy
  .get('#external-game-iframe')
  // Cypress yields jQuery element, which has the real
  // DOM element under property "0".
  // From the real DOM iframe element we can get
  // the "document" element, it is stored in "contentDocument" property
  // Cypress "its" command can access deep properties using dot notation
  // https://on.cypress.io/its
  .its('0.contentDocument').should('exist')
}

const getIframeBody = () => {
  // get the document
  return getIframeDocument()
  // automatically retries until body is loaded
  .its('body').should('not.be.undefined')
  // wraps "body" DOM element to allow
  // chaining more Cypress commands, like ".find(...)"
  .then(cy.wrap)
}

describe('rpdev test', () => {
    it('registration, logout, login, login to bo, airdr, make withdrawal/deposit', () => {
      
      cy.viewport(1920, 1080);
      //   expect(true).to.equal(true)
      // regostration new acc for withdrawal
      cy.visit('https://rpdev.click', {
        auth: {
          username: 'admin',
          password: 'admin',
        }});
      cy.get('.nickname', { timeout: 10000 }).should('be.visible'),
      cy.get('#djHideToolBarButton').click();
      cy.get('.button-orange').first().click();
      cy.get('#email').should('be.visible').type(accountLogin);
      cy.get('[datatype=year]').should('be.visible').clear().type('1990');
      cy.get('#password').should('be.visible').clear().type(accountLogin);
      cy.get('.auth-button').should('be.visible').click();
      cy.get('div[class="MuiPaper-root MuiDialog-paper MuiDialog-paperScrollPaper MuiDialog-paperWidthSm MuiPaper-elevation24 MuiPaper-rounded"]', { timeout: 20000 }).should('be.visible');
      cy.get('.main-deposit-info', { timeout: 20000 }).should('be.visible');
      cy.get('#close').click();
      cy.get('.IconsPanelComponent-title-199').should('be.visible');
      cy.get('.MuiButton-label').first().click();
      cy.contains('Logout').click();
      cy.contains('LOG OUT').click();
      // login
      cy.contains('LOGIN').click();
      cy.get('#email').type(accountLogin);
      cy.get('#password').type(accountLogin);
      cy.contains('LOG IN').click({force: true});
      // login to bo
      cy.visit('https://bo.rpdev.click', {
      auth: {
        username: 'admin',
        password: 'admin',
      }});
      cy.get('[type=text]').type(Cypress.env('DJ_LOG'));
      cy.get('[type=password]').type(Cypress.env('DJ_PASS'));
      cy.get('[type=submit').click();
      cy.contains('Players').click();
      cy.get('[type=submit').click();
      cy.get('[type=text]').type(accountLogin);
      cy.get('[type=submit]').click();
      cy.get('.field-user_information').click();
      cy.get('#account-type').select('0xWager');
      cy.contains('Update account type').click();
      cy.on('window:confirm', () => true);
      cy.get('#withdrawal-type').select('AUTO WITHDRAWALS');
      cy.contains('Set withdrawals type').click();
      cy.on('window:confirm', () => true);

      
      cy.get('#airdrop-input').clear().type('150');
      cy.get('#cryptos_ad').select('BTC');
      cy.get('.airdrop.interaction-block').contains('GIVE').click();
      cy.on('window:confirm', () => true);
      
      // registration new acc for deposit
      cy.visit('https://rpdev.click', {
        auth: {
          username: 'admin',
          password: 'admin',
        }});
      
      cy.get('.button-orange').first().click();
      cy.get('#email').type(secondAccLogin);
      cy.get('[datatype=year]').clear().type('1990');
      cy.get('#password').clear().type(secondAccLogin);
      cy.get('.auth-button').click();
      cy.get('#depositAddress', { timeout: 20000 }).should('be.visible');
      cy.get('#depositAddress').then((el) => {
        const depWallet = el.attr('value');

        cy.get('#close').click();
        cy.get('.MuiButton-label').first().click();
        cy.contains('Logout').click();
        cy.contains('LOG OUT').click();

        // login to first acc for withdrawal
        cy.visit('https://rpdev.click', {
          auth: {
            username: 'admin',
            password: 'admin',
          }});
        
        cy.contains('LOGIN').click();
        cy.get('#email').type(accountLogin);
        cy.get('#password').type(accountLogin);
        cy.contains('LOG IN').click({force: true});
        cy.get('button.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary').click();
        cy.get('#info-ok').click();
        cy.get('.MuiButton-label').first().click();
        cy.get('.menu-payments span[style] > span > span', { timeout: 60000 }).should('be.visible');
        cy.contains('Withdraw').click();
        cy.get('#rocketpot-withdraw-bitcoin-address').type(depWallet);
        cy.get('#maxAmountButton').click();
        cy.get('#first_withdraw_button').click();
        cy.get('#withdrawal_confirm_button').click();
        //cy.get('#info-ok').click();
        cy.get('.MuiButton-label').first().click();
        cy.contains('Logout').click();
        cy.contains('LOG OUT').click();

        // login to deposited acc
        cy.visit('https://rpdev.click', {
        auth: {
          username: 'admin',
          password: 'admin',
        }});
        cy.contains('LOGIN').click();
        cy.get('#email').type(secondAccLogin);
        cy.get('#password').type(secondAccLogin);
        cy.contains('LOG IN').click({force: true});
        cy.get('[aria-label="Menu"]').click();
        cy.get('.menu-payments span[style] > span > span', { timeout: 60000 }).should('be.visible');
        cy.get('div[class="MuiPaper-root MuiDrawer-paper MuiDrawer-paperAnchorRight MuiPaper-elevation16"] button[title="close"]').click({force: true});
        cy.get('input[placeholder="Search..."]').type('All Lucky Clovers 100');
        cy.get('button[class*="SearchBlockComponent-searchButton"]')
        .click();
        cy.get('div[class*="GameIconComponent-linkContainer"] a[class*="GameIconComponent-container"]').click({force: true});
        cy.wait(18000);
        getIframeBody().find('canvas').click(850, 520);

      });


      

    });
  });

  cy.intercept('https://api.rocketpot.io/api/v1/cubeia/generate_code', (req) => {
            cy.log(req);
            req.continue((response) => {
                expect(response).to.have.property('statusCode', 300);
                expect(response.body.token).to.not.be.null;
              });
        });