import { EnvironmentConfig } from '../../interfaces/environment-config';

class Config {
    get environment(): Cypress.Chainable<string> {
        return cy.fixture('config/env').then(env => {
            return <string>env.environment;
        });
    }

    get current(): Cypress.Chainable<EnvironmentConfig> {
        return this.environment.then(env => {
            return cy.fixture(`config/${env}`).then((currentEnv: EnvironmentConfig) => {
                return currentEnv;
            });
        });
    }
}

export default new Config();
