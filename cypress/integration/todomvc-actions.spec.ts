/// <reference types="cypress" />

import { todoPage } from '../page-objects/todo-page';

describe('Todo Actions' , () => {

    beforeEach( ()=> {
        todoPage.open()
        todoPage.addTodo('Clean room')
    })

    it('Should add a new todo to the list', () => {
     
        todoPage.validateTodoTxt(0, 'Clean room')
        cy.get('.toggle').should('not.to.be.checked')
    })
    
    it('Should market a todo as completed', () => {
        todoPage.clickToggle()
        cy.get('label').should('have.css', 'text-decoration-line', 'line-through')
    })
    
    it('Should clear completed todos', () => {
        todoPage.clickToggle()
        cy.get('label').should('have.css', 'text-decoration-line', 'line-through')
        
        cy.contains('Clear').click()
        cy.get('.todo-list').should('not.have.descendants', 'li')
    })
})