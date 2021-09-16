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

})