require('dotenv').config();

//let restorePassAcc = Cypress.env('RESTORE_PASS_LOGIN') + '+' + `${Date.now()}@devforth.io`;
let restorePassAcc = `rest+${Date.now()}@devforth.io`;

describe('rpdev test', () => {
    it('restore password', () => {
        cy.viewport(1920, 1080);
        //reg new acc
        cy.visit('https://rpdev.click', {
        auth: {
          username: 'admin',
          password: 'admin',
        }});
        cy.get('#djHideToolBarButton').click();
        cy.get('.button-orange').first().click();
        cy.get('#email').should('be.visible').type(restorePassAcc);
        cy.get('[datatype=year]').should('be.visible').clear().type('1990');
        cy.get('#password').should('be.visible').clear().type(restorePassAcc);
        cy.get('.auth-button').should('be.visible').click();
        cy.get('.main-deposit-info', { timeout: 20000 }).should('be.visible');
        cy.get('#close').click();
        cy.get('.MuiButton-label').first().click();
        cy.contains('Logout').click();
        cy.contains('LOG OUT').click();
        //restore
        cy.get('.btn-link .button-gray').click();
        cy.get('span[class="forgot-password"]').click();
        cy.get('#forgot-email').type(restorePassAcc);
        cy.contains('RESTORE').click();

    });

})