import Locators from '../support/locators/locators'
const locators = new Locators

Cypress.Commands.add("access_url", () => { 
    cy.visit('/')
})

Cypress.Commands.add("input_task", (task) => { 
    cy.get(locators.field_list_tasks()).type(task)
    .type('{ENTER}')
})

Cypress.Commands.add("validate_included_task", (task) => { 
    cy.get(locators.body_task()).should('be.visible', task)
})

Cypress.Commands.add("conclude_task", () => { 
    cy.get(locators.complete_task()).click()
})

Cypress.Commands.add("clear_conclude_task", () => { 
    cy.get(locators.button_clear_completed()).click()
})

Cypress.Commands.add("take_off_finish_task", () => { 
    cy.get(locators.complete_task()).click()
})

Cypress.Commands.add("refresh_page", () => { 
    cy.reload()
  })