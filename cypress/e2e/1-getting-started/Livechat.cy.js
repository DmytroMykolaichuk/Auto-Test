describe('LiveChat',() => {
    it('Enter',() => {
        cy.visit('https://rocketpot.io');
        cy.get('#login-button > .btn').click()
        cy.get('input[id="email"]').type('dmykolaichuk@devforth.io').should('have.value', 'dmykolaichuk@devforth.io');
        cy.get('input[id="password"]').type('dmykolaichuk@devforth.io').should('have.value', 'dmykolaichuk@devforth.io');
        cy.get('button[id="auth-btn"]').should('be.visible').click();
        cy.get('.detail > .btn > .btn-text').should('be.visible').click()
        cy.wait(2000)
        cy.get('div[class="dropdown gray arrow arrow-right"]').contains('Live Chat').click( {force: true} )
        //cy.wait(2000)
    })
    it('iframe', () =>{
        let iFrameChat = cy.get('#webWidget').its('0.contentDocument.body').should('be.visible').then(cy.wrap)
        iFrameChat.find('textarea[data-garden-id="forms.textarea"]').type('Hello world').wait(2000).clear();
        iFrameChat = cy.get('#webWidget').its('0.contentDocument.body').should('be.visible').then(cy.wrap)
        iFrameChat.find('div[data-testid="chat-footer-menu-buttons"]').children('div[tabindex="-1"]').click()
        iFrameChat.find('ul[data-garden-id="dropdowns.menu"]').children('li[data-testid="chat-menu-item-edit-contact-details"]').click()
        iFrameChat = cy.get('#webWidget').its('0.contentDocument.body').should('be.visible').then(cy.wrap)
        iFrameChat.find('div[data-garden-id="forms.field"]').children('input[data-testid="name-field"]').clear().type('Mykolaichuk').wait(2000)
        iFrameChat = cy.get('#webWidget').its('0.contentDocument.body').should('be.visible').then(cy.wrap)
        iFrameChat.find('div[data-garden-id="forms.field"]').children('input[data-testid="email-field"]').type('Dmytro').wait(2000)
        iFrameChat = cy.get('#webWidget').its('0.contentDocument.body').should('be.visible').then(cy.wrap)
        iFrameChat.find('div[data-garden-id="forms.field"]').children('input[data-testid="name-field"]').clear()
        cy.wait(3000)
        iFrameChat = cy.get('#webWidget').its('0.contentDocument.body').should('be.visible').then(cy.wrap)
        iFrameChat.find('div[data-garden-id="forms.field"]').children('input[data-testid="email-field"]').clear()
        iFrameChat = cy.get('#webWidget').its('0.contentDocument.body').should('be.visible').then(cy.wrap)
        iFrameChat.find('button[data-testid="button-cancel"]').click()
        iFrameChat = cy.get('#webWidget').its('0.contentDocument.body').should('be.visible').then(cy.wrap)
        iFrameChat.find('button[aria-label="Minimize widget"]').click({force: true})
    })
})