/// <reference types="Cypress" />

context('Actions', () => {
    beforeEach(() => {
        cy.visit('https://www.google.com');
    });

    it('validate google search', () => {
        cy.get('.gLFyf').type('I love love love LOVE Test & Automation!').type('{enter}');
        cy.title().should('include', 'I love love love LOVE Test & Automation!');

    });

});