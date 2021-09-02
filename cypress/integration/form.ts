describe("Form", () => {
    it("Fills out dev.to login and checks success", () => {
        cy.visit("https://dev.to/enter");

        const form = cy.get("form#new_user");
        //change email and password with yours
        form.get("input#user_email").should("exist").type("email");
        form.get("input#user_password").should("exist").type("pass")
        cy.get("form#new_user").submit();

        cy.get("#rendered-article-feed").should("contain","article");
    })
})