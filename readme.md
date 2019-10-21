# Cypress - UI POC
Simple TS cypress POC - can be implemented in JS as well.

Cypress workshop - https://github.com/cypress-io/testing-workshop-cypress

# Starting to use Cypress
* Cypress uses Mocha as a runner, it has built in assertions, UI interface and a logger.

npm install
npx run cypress -> would open the UI of cypress.
You can use the selector playground (looks like a target, near the the url search bar), it will find the best selector and you can copy the selector + cypress command!

You can re run the test after making changes in the code by refreshing the page

To run a single test: npx run cypress run --spec cypress/integration/todomvc-actions.spec.ts

# Configs
In cypress.json we have:  "watchForFileChanges": false  - this flag disable automatic running of tests upon saving the file - you can enable it for debugging.

# Timeouts
Cypress default 4 second time out. If we have a specific test we want to increase the timeout we can add it as a parameter. 
```
it('Should add a new todo to the list', () => {
    cy.visit('http://todomvc-app-for-testing.surge.sh/')
    cy.get('.new-todo', {timeout: 6000}).type('Clean room{enter}')
})
```

# auto-complete
To have cypress API autocomplete you have 2 options:
1. paste /// <reference types="cypress" /> at the top of the file (not to be committed)
2. Install 'cypress snippets' extension


# Assertions
To assert we use .should(),
Positive assertion example: cy.get('#result').should('have.text', 'John Doe'), the assertion would always be inside the first parameter.
Negative assertion example: cy.get('.toggle').should('not.to.be.checked') // asserts toggle is not checked
CSS assertion example:  cy.get('label').should('have.css', 'text-decoration-line', 'line-through') // asserts an element have a strikethrough
Elements assertion example:  cy.get('.todo-list').should('not.have.descendants', 'li') // asserts that an 'li' element does not have any descendants

List of assertion commands:  https://docs.cypress.io/guides/references/assertions.html#Chai
List of commands: https://docs.cypress.io/api/commands/should.html#Chainers

# Tests grouping
Tests in the UI relays on current behavior
The following tests will pass since the state of the UI changes.

```
describe('Todo Actions' , () => {
    beforeEach( ()=> {
        cy.visit('http://todomvc-app-for-testing.surge.sh/')
        cy.get('.new-todo', {timeout: 6000}).type('Clean room{enter}')
    })

    it('Should add a new todo to the list', () => {
     
        cy.get('label').should('have.text', 'Clean room')
        cy.get('.toggle').should('not.to.be.checked')
    })
    
    it('Should market a todo as completed', () => {
        cy.get('.toggle').click()
        cy.get('label').should('have.css', 'text-decoration-line', 'line-through')
    })
    
    it('Should clear completed todos', () => {
        cy.get('.toggle').click()
        cy.get('label').should('have.css', 'text-decoration-line', 'line-through')
        
        cy.contains('Clear').click()
        cy.get('.todo-list').should('not.have.descendants', 'li')
    })
})
```
If you wish to run a single test add .only == it.only('bla, ()=>{})

# Stubbing UI tests

# Cypress CLI
We won't always want to use the cypress interactive UI, especially when using CI/CD. 
To run it non interactively we run the command: npx cypress run


# Page Objects in Cypress
They are the standard way of coping with large test suites, because, first of all, they enable us to write the tests using objects that are relevant to the application; and limit the use of selectors and other page-specific code, which makes the test code incomprehensible.

Page objects also enable some level of flexibility when the structure of a page changes and we need to change our code to accommodate that.

We are using BasePage class, it will contain all of the service in order to preserve DRY principle. All test pages should implement this class.

# Visual validation