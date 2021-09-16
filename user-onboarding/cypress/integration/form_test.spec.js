describe("User-Onboarding App", () => {
    beforeEach(() => {
        cy.visit('localhost:3000');
    })
    //helpers
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

        it('text inputs function', () => {
            usernameInput()
                //first check that it initializes with no value
                .should('have.value', '')
                //then check functionality
                .type('Astrospence')
                .should('have.value', 'Astrospence');

            emailInput()
                //first check that it initializes with no value
                .should('have.value', '')
                //then check functionality
                .type('mage@mage.com')
                .should('have.value', 'mage@mage.com');

            passwordInput()
                //first check that it initializes with no value
                .should('have.value', '')
                //then check functionality
                .type('magesrock')
                .should('have.value', 'magesrock');
        })

        it('warrior class selector functions', () => {
            warriorClass()
                //first check that it initializes with no value
                .should('have.value', '')
                //then check that each selection will update the value
                .select('Swordsman')
                .select('Archer')
                .select('Necromancer')
                .select('Cleric')
                .select('Mage');    
        })

        it('terms of service checkbox functions', () => {
            terms()
                //first check that it initializes unchecked
                .should('not.be.checked')
                //then check functionality
                .check()
                .uncheck()
                //check once more to enable submit button test
                .check();
        })
    })

    describe('Input validation functions', () => {
        it('username, email, and password each display errors if invalid', () => {
            usernameInput().type('blah');
            cy.contains('Username must be at least 5 characters long');
            usernameInput().clear();
            cy.contains('Username is required');
            emailInput().type('blah');
            cy.contains('Must be a valid email address');
            emailInput().clear();
            cy.contains('Email is required');
            passwordInput().type('blah');
            cy.contains('Password must be at least 8 characters long');
            passwordInput().clear();
            cy.contains('Password is required');
        })
    })

    describe('User can submit form and new Warrior is created', () => {
        it('submit button enables once all inputs have valid values, and a new Warrior is added to the registry', () => {
            //simulate new entry
            usernameInput().type('Astrospence');
            emailInput().type('mage@mage.com');
            passwordInput().type('magesrock');
            warriorClass().select('Mage');
            terms().check();
            //check that the submit button enables once all values are in, then test functionality
            submitButton()
                .should('not.be.disabled')
                .click();
            //check that a new Warrior was added to the registry with username, email, and warrior class
            cy.contains('Astrospence',);
            cy.contains('mage@mage.com');
            cy.contains('Mage');
        })
    })

})