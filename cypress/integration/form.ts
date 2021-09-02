describe("Form", () => {
    it("Fills out dev.to login and checks success", () => {
        cy.visit("https://dev.to/enter");

        const form = cy.get("form#new_user");
        //change email and password with yours
        form.get("input#user_email").should("exist").type(Cypress.env("email"));
        form.get("input#user_password").should("exist").type(Cypress.env("pass"))
        cy.get("form#new_user").submit();

        cy.get("#rendered-article-feed").should("contain","article");

        cy.visit("https://dev.to/settings/profile");
        cy.get("textarea[id='profile[currently_learning]']").clear().type("Cypress");
        cy.get(".sticky-footer-form").submit();

        cy.get(".crayons-banner").should("contain","updated");
    })
})