describe("User-Onboarding App", () => {
    beforeEach(() => {
        cy.visit('localhost:3000');
    })

    const usernameInput = () => cy.get('[data-cy=username]');
    const emailInput = () => cy.get('[data-cy=email]');
    const passwordInput = () => cy.get('[data-cy=password]');
    const warriorClass = () => cy.get('[data-cy=warriorClass]');
    const terms = () => cy.get('[data-cy=terms]');
    const submitButton = () => cy.get('[data-cy=submit]');

    describe('Can the user input information', () => {
        it('can navigate to the site', () => {
            cy.url().should('include', 'localhost:3000');
        })

        it('submit button initializes as disabled', () => {
            submitButton().should('be.disabled');
        })

        it('can type into the text inputs', () => {
            usernameInput()
                .should('have.value', '')
                .type('Astrospence')
                .should('have.value', 'Astrospence');

            emailInput()
                .should('have.value', '')
                .type('mage@mage.com')
                .should('have.value', 'mage@mage.com');

            passwordInput()
                .should('have.value', '')
                .type('magesrock')
                .should('have.value', 'magesrock');
        })

        
    })

})