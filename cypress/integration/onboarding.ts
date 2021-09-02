describe('My First & Second Task: Custom commands', () => {
    it('Visits Cypress via Google', () => {
        cy.googleAndCookies();
        cy.get(".gLFyf.gsfi").type("cypress{enter}").should("have.value", "cypress");
        cy.get("#search").find("h3:first").click();
        cy.url().should("eq", "https://www.cypress.io/");
    })
})

describe("My Third Task: Form", () => {
    it("Fills out Mozilla Form", () => {
        cy.visit("https://developer.mozilla.org/en-US/docs/Learn/Forms/Your_first_form");
        cy.get("iframe").then($iframe => {
            const $doc = $iframe.contents().find("body");

            const form = cy.wrap($doc);
            form.find("#name", {timeout: 10000}).type("valentin");
        })

    })
})
