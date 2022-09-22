import 'cypress-network-idle';

const getIframeDocument = () => {
    return cy
    .get('iframe.frame')
    // Cypress yields jQuery element, which has the real
    // DOM element under property "0".
    // From the real DOM iframe element we can get
    // the "document" element, it is stored in "contentDocument" property
    // Cypress "its" command can access deep properties using dot notation
    // https://on.cypress.io/its
    .its('0.contentDocument').should('exist')
  };
const getIframeBody = () => {
    // get the document
    return getIframeDocument()
    // automatically retries until body is loaded
    .its('body').should('not.be.undefined')
    // wraps "body" DOM element to allow
    // chaining more Cypress commands, like ".find(...)"
    .then(cy.wrap)
  }

describe('Test games in all providers', () => {

    it('Check games', () => {

        cy.visit('https://rocketpot.io/');
        cy.waitForNetworkIdle(1000);
        cy.get('div.end span.button-gray').click();
        cy.get('input#email').type('vsemeniuk@devforth.io');
        cy.get('input#password').type('vsemeniuk@devforth.io');
        cy.get('button#auth-btn').click();
        cy.get('div.header .close-icon').click(); // mobile bonus. delete after the test is done
        cy.get('a[href="/slotsbitcoin/"] + div.gameSlider .splide__list > :nth-child(44)').click();
        cy.wait(100_000);

        cy.get('iframe.iframe').trigger('keydown', { keyCode: 32});
        cy.wait(500);
        cy.get('iframe.iframe').trigger('keyup', { keyCode: 32});
        // getIframeBody().find('canvas').click(850, 520, {force: true});
        // cy.wait(5000);
        // cy.get('iframe.frame').focus().type('{keyCode: 32}');
        // getIframeBody().find('canvas').click(1182, 690, {force: true});

    });

})