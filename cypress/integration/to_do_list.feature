Feature: Lista de Tarefas

Scenario: Incluir uma nova Tarefa
    Given Acesso o sistema
    And incluo a tarefa "Caminhar"
    Then valido que a tarefa "Caminhar" existe na lista

Scenario: Concluir e Limpar Tarefa Concluida
    Given Acesso o sistema
    And incluo a tarefa "Caminhar"
    And incluo a tarefa "Correr"
    And concluo a tarefa
    Then clico no botao "Clear completed"

Scenario: Deixar tarefa concluida como Pendente
    Given Acesso o sistema
    And incluo a tarefa "Caminhar"
    And incluo a tarefa "Correr"
    And concluo a tarefa
    Then volto a tarefa para Pendente

Scenario: Atualizar pagina
    Given Acesso o sistema
    And incluo a tarefa "Caminhar"
    And atualizo a pagina
    Then valido que a tarefa "Caminhar" existe na lista

# Scenario: Editar descricao tarefa

# Scenario: Excluir tarefa

# Scenario: Excluir tarefa

# Scenario: Deixar tarefa Pendente como concluida

# Scenario: Exibir todas as tarefas

# Scenario: Exibir tarefas pendentes

# Scenario: Exibir tarefas concluidas

# Scenario: Validar criacao de tarefa sem descricao



