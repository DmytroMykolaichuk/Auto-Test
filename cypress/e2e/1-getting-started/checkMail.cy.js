require('dotenv').config();

//let restorePassAcc = Cypress.env('RESTORE_PASS_LOGIN') + '+' + `${Date.now()}@devforth.io`;
let restorePassAcc = `rest+${Date.now()}@devforth.io`;

describe('rpdev test', () => {
    it('restore password', () => {
        cy.viewport(1920, 1080);
        //reg new acc
        cy.visit('https://mail.google.com/');
        cy.get('div[class*="rFrNMe N3Hzgf jjwyfe QBQrY"] input[class="whsOnd zHQkBf"]').type(Cypress.env('PASSW_RESTORE_LOG'));
        cy.get('[class*="VfPpkd-LgbsSe VfPpkd-LgbsSe-OWXEXe-k"]').click();
        cy.get('div[class*="rFrNMe ze9ebf"] input[class="whsOnd zHQkBf"]').type(Cypress.env('PASSW_RESTORE_PASS'));
        cy.get('button[class*="VfPpkd-LgbsSe VfPpkd-LgbsSe-OWXEXe-k"]').click();


    });

})