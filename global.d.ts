declare namespace Cypress{
    interface Chainable<Subject>{
        waitUntil(experssion: () => Chainable<boolean>): Chainable<boolean>;
    }
}
