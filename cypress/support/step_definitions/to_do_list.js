import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("Acesso o sistema", function () {
    cy.access_url()
});

Given('incluo a tarefa {string}', function (task) {
    cy.input_task(task)
});

Then('valido que a tarefa {string} existe na lista', function (task) {
    cy.validate_included_task(task)
});

Given('concluo a tarefa', function () {
    cy.conclude_task()
});

When('clico no botao {string}', function () {
    cy.clear_conclude_task()
});

Then('volto a tarefa para Pendente', function () {
    cy.take_off_finish_task()
});


Then('edito a descricao da tarefa para {string}', function (edit) {
    cy.edit_task(edit)
});

When('atualizo a pagina', function () {
    cy.refresh_page()
});