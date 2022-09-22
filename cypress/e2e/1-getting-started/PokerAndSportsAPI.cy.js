let regTest = Cypress.env('TEST_LOG_AND_PASS') + '+' + `${Date.now()}@devforth.io`;
let TestLogin = Cypress.env('VSEM');

describe('Test poker and sportsbetting API', () => {
    
    it('poker API', () => {
        
        cy.visit('https://rocketpot.io/');
        cy.get('div.end span.button-gray').click();
        cy.get('input#email').type('vsemeniuk@devforth.io');
        cy.get('input#password').type('vsemeniuk@devforth.io');
        cy.get('button#auth-btn').click();

        // cy.get('div.sidemenu-main [href="/poker/"]').click();
        cy.request('POST', 'https://api.rocketpot.io/api/v1/cubeia/generate_code', {crypto_code: "BTC"}).then(response => {
                expect(response).to.have.property('status', 200);
                expect(response.body.token).to.not.be.null;
        });
    });
    
    it('check sportsbetting API', () => {
        cy.visit('https://rocketpot.io/');
        cy.get('div.end span.button-gray').click();
        cy.get('input#email').type('vsemeniuk@devforth.io');
        cy.get('input#password').type('vsemeniuk@devforth.io');
        cy.get('button#auth-btn').click();
        cy.request('POST', 'https://api.rocketpot.io/api/v1/betby/generate_user_ucode', {crypto_code: "BTC"}).then(response => {
                expect(response).to.have.property('status', 200);
                expect(response.body.unique_code).to.not.be.null;
        });
    });
});