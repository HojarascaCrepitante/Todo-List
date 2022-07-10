import './style.css'
import {createEvent,createProject} from './Logic'


const newElementForm = function (){
    const formContainer = document.createElement('div')
        formContainer.setAttribute('id', 'form-container')
        
    const form = document.createElement('form')
        const formTitle = document.createElement('h1')
        formTitle.textContent = 'Add event'

        const label_1 = document.createElement('label')
            label_1.htmlFor = 'title'
            label_1.textContent = 'Title of event'
        const input_text_title = document.createElement('input')
            input_text_title.setAttribute('id', 'title')

        const label_2 = document.createElement('label')
            label_2.htmlFor = 'description'
            label_2.textContent = 'Description'
        const input_text_description = document.createElement('textarea')
            input_text_description.cols = '50'
            input_text_description.rows = '1'
            input_text_description.setAttribute('id', 'description')        
        
        const label_3 = document.createElement('label')
            label_3.htmlFor = 'dueDate'
            label_3.textContent = 'Due date'
        const input_text_duedate = document.createElement('input')
            input_text_duedate.type = 'date'
            input_text_duedate.setAttribute('id', 'dueDate')

        const label_4 = document.createElement('label')
            label_4.htmlFor = 'priority'
            label_4.textContent = 'Important?'
        const input_text_priority = document.createElement('input')
            input_text_priority.type = 'checkbox'
            input_text_priority.setAttribute('id','priority')

        const submitButton = document.createElement('button')
            submitButton.textContent = 'Create!'
            submitButton.type = 'button'
            submitButton.addEventListener('click', createEvent)

        const cancelButton = document.createElement('button')
            cancelButton.textContent = 'Cancel'
            cancelButton.type = 'reset'
    
    form.append(formTitle, label_1, input_text_title, label_2,input_text_description, label_3, input_text_duedate, label_4, input_text_priority, submitButton,cancelButton)
    formContainer.appendChild(form)

    return formContainer
}
const newProjectForm = function(){
    const formContainer = document.createElement('div')
        formContainer.setAttribute('id','form-container')
    const form = document.createElement('form')
        const formTitle = document.createElement('h1')
        formTitle.textContent = 'Add project'

    const label_1 = document.createElement('label')
        label_1.htmlFor = 'title'
        label_1.textContent = 'Title of project'
    const input_text_title = document.createElement('input')
        input_text_title.setAttribute('id', 'title')

    const submitButton = document.createElement('button')
        submitButton.textContent = 'Create!'
        submitButton.type = 'button'
        submitButton.addEventListener('click', createProject)

    const cancelButton = document.createElement('button')
        cancelButton.textContent = 'Cancel'
        cancelButton.type = 'reset'

    form.append(formTitle,label_1,input_text_title,submitButton, cancelButton)
    formContainer.appendChild(form)
    return formContainer
}

export  { newElementForm , newProjectForm}