class Locators {

    field_list_tasks = () => { return '.new-todo' }
    body_task = () => { return '.view > label' }
    complete_task = () => { return '.toggle:eq(1)' }
    button_clear_completed = () => { return '.clear-completed' }

}

export default Locators;