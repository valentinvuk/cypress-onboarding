describe("Pokemon interceptor", () => {
    it("Intercepts Ditto request", () => {
        cy.intercept("https://pokeapi.co/api/v2/pokemon/ditto", (req => {

            req.continue((res) => {
                const body = res.body;
                body.abilities[0].ability.name = "testName";
                body.abilities[0].ability.url = "testUrl";
            })
        }));

        cy.visit("https://pokeapi.co/");


        cy.get("li").contains("testName").should("exist");
        cy.get("li").contains("testUrl").should("exist");


    })
})