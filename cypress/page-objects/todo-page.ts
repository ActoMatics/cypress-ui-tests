import { BasePage } from './base-page';
import config from '../support/utils/config';

/**
 *
 *
 * @export
 * @class TodoPage
 * @extends {BasePage}
 */
export class TodoPage extends BasePage {
    open(): Cypress.Chainable<Window> {
        return config.current.then(env => {
            return super.open(env.HOME_PAGE);
        });
    }

    get url(): Cypress.Chainable<string> {
        return config.current.then(env => {
            return env.HOME_PAGE;
        });
    }

    addTodo(todoText: string) {
        cy.get('.new-todo').type(`${todoText}{enter}`);
    }

    clickAFilter(filterTxt: string) {
        cy.contains(`${filterTxt}`).click();
    }

    clickSpecificTodo(todoIndex: number){
        cy.get(`:nth-child(${todoIndex}) > .view > .toggle`).click();
    }

    // Validations functions
    validateTodoTxt(todoIndex: number, expectedText: string) {
        cy.get(`.todo-list li:nth-child(${todoIndex + 1}) label`).should('have.text', expectedText);
    }

    validateFilter(filterLength: number) {
        cy.get('.todo-list li').should('have.length', filterLength);
    }
    
}

export const todoPage = new TodoPage();
