import { newElementForm, newProjectForm } from './newElement'
import './style.css'

const initialPage = function(){
    const container = document.createElement('div')
    container.classList.add("container")
        
        const mainHeader = document.createElement('div')
        mainHeader.classList.add("main-header")
            const title = document.createElement('h1')
            title.textContent = 'DO STUFF!'
        
        const optionList = document.createElement('ul')
            const newProject_Li = document.createElement('li')
                const newProject_Li_Button = document.createElement('button')        
                    newProject_Li_Button.textContent = 'New Project'
                    newProject_Li_Button.addEventListener('click', ()=>{
                        if(!document.getElementById('form-container'))
                        document.body.appendChild(newProjectForm())
                    })
            newProject_Li.appendChild(newProject_Li_Button)

            const newElement_Li = document.createElement('li')
               const newElement_Li_Button = document.createElement('button')
                newElement_Li_Button.textContent = 'Add event'
                newElement_Li_Button.addEventListener('click', ()=>{
                    if (!document.getElementById('form-container'))
                    document.body.appendChild(newElementForm())
                })
            newElement_Li.appendChild(newElement_Li_Button)
        optionList.append(newProject_Li,newElement_Li)

        mainHeader.append(title,optionList)
    container.appendChild(mainHeader)

    const sideBar = document.createElement('div')
        sideBar.classList.add('sidebar')
    container.appendChild(sideBar)

        const content = document.createElement('div')
                content.classList.add('content')
        container.appendChild(content)
    return container
}

export default initialPage