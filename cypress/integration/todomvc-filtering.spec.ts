/// <reference types='cypress' />

import { todoPage } from '../page-objects/todo-page';

describe('TODO filtering assertions', () => {
  beforeEach(() => {
    todoPage.open();
    todoPage.addTodo('Clean my car');
    todoPage.addTodo('Learn Cypress');
    todoPage.addTodo('Implement Cypress');

    todoPage.clickSpecificTodo(2);
  });

  it('Should filter "active" todos', () => {

    todoPage.clickAFilter('Active')
    todoPage.validateFilter(2)
  });

  it('Should filter "Completed" todos', () => {
    todoPage.clickAFilter('Completed')
    todoPage.validateFilter(1)
  });

  it('Should filter "All" todos', () => {
    todoPage.clickAFilter('All')
    todoPage.validateFilter(3)
  });

});
