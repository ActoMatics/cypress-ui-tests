import { todoPage } from "../../page-objects/todo-page";

describe.skip('Visual regression tests', () => {
  it('Should match previous screenshot "todo home page"', () => {
    todoPage.open();
    cy.toMatchImageSnapshot();
  });
});