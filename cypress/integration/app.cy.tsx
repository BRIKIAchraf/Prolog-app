describe("Home Page", () => {
  it("should have an h1 element", () => {
    // Visit the homepage of your Next.js app
    cy.visit("http://localhost:3000");

    // Check that the h1 element is found
    cy.get("h1").should("exist");
  });
});
