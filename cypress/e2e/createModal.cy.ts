describe("template spec", () => {
  it("should visit", () => {
    cy.visit("http://localhost:5173");

    cy.get("button").contains("Добавить").click();
    cy.get('input[name="title"]').type("Cypress title");
    cy.get('textarea[name="body"]').type("Cypress post body");
    cy.get("button").contains("Создать").click();

    cy.get("span").contains("Пост создан!");

    cy.get("button").contains("Закрыть").click();
  });
});
