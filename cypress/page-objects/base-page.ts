import config from '../support/utils/config';

export class BasePage {

    open(link: string): Cypress.Chainable<Window> {
        return cy.visit(link);
    }     

    /**
     * Get page url
     *
     * @readonly
     * @type {Cypress.Chainable<string>}
     * @memberof BasePage
     */
    get url(): Cypress.Chainable<string> {
        return config.current.then(() => {
            return '/';
        });
    }

    clickToggle() {
        cy.get('.toggle').click()
    }
}
