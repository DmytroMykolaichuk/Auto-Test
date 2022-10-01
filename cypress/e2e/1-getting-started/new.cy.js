
const email=`dmykolaichuk + ${Date.now().toString(32)}@devforth.io`
describe('test', () => {
    it('Register', () => {
        cy.visit('https://rocketpot.io/register/')
        cy.get('div[id="main-auth-popup"]').should('be.visible')
        cy.get('input[id="email"]').type(email)
        cy.get('input[id="day"]').type('26')
        cy.get('input[id="month"]').type('7')
        cy.get('input[id="year"]').type('1994')
        //cy.get('input[id="password"]').type(email)
        cy.get('div[class="checkbox"]').click()
        cy.get('button[id="auth-btn"]').click()
    })
})//test
//test 2 code
