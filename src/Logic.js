import {format, formatDistance} from "date-fns"

let projectList = [
  {
  title:"All Projects",
  id: 10,
  myEvents:[]
  },
  {
    title: "Important",
    id:15,
    myEvents:[]
  },
  {
    title:"Completed",
    id: 12,
    myEvents:[]
    }
];

const createTodoCards = function(el){
  let todoCard = document.createElement('div')
        todoCard.classList.add('todo')
        todoCard.dataset.reference = el.id
        let title = document.createElement('div')
        let titleText = document.createElement('p')
          titleText.textContent = `Title : ${el.title}`
          title.appendChild(titleText)
        let description = document.createElement('div')
        let descriptionText = document.createElement('p')
          descriptionText.textContent = `Description : ${el.description}`
          description.appendChild(descriptionText)
        let dueDate = document.createElement('div')
        let dueDateText = document.createElement('p')
          dueDateText.textContent = `Due Date : ${el.dueDate}`
          dueDate.appendChild(dueDateText)
        let remainingTime = document.createElement('div')
          let timeParagraph = document.createElement('p')
            timeParagraph.textContent = `${el.timeLeft} left`
            remainingTime.appendChild(timeParagraph)

          let buttonArea = document.createElement('div')
            buttonArea.classList.add("options")
            let remove = document.createElement('button')
              remove.addEventListener('click', ()=>{
                for (let i = 0; i < projectList.length; i++) {
                  if(projectList[i].myEvents.length > 0){
                   todoCard.remove()
                   let removeEventFromArray = projectList[i].myEvents.filter(x => x.id !== el.id)
                   projectList[i].myEvents = removeEventFromArray
                   
                }                
              }
              store()
              })
              remove.textContent = "Delete"
              

          let markComplete = document.createElement('button')
            markComplete.textContent = "Done"
            markComplete.addEventListener('click', ()=>{
             let completed = ""
              for (let i = 0; i < projectList.length; i++) {
                if(projectList[i].myEvents.length > 0){
                 todoCard.remove()
                 completed = projectList[i].myEvents.find(x => x.id == el.id)
                 let removeCompletedFromArray = projectList[i].myEvents.filter(x => x.id !== el.id)
                 projectList[i].myEvents = removeCompletedFromArray
                 }
              }     
              projectList[2].myEvents.push(completed)        
              
              store()     
            })
            
          buttonArea.append(markComplete,remove)
        todoCard.append(title,description,dueDate,remainingTime,buttonArea)
        document.querySelector('.content').appendChild(todoCard)
}

const completedTodoCards = function(element){
  let todoCard = document.createElement('div')
        todoCard.classList.add('todo')
        todoCard.dataset.reference = element.id
        let title = document.createElement('div')
        let titleText = document.createElement('p')
          titleText.textContent = `Title : ${element.title}`
          title.appendChild(titleText)
        let description = document.createElement('div')
        let descriptionText = document.createElement('p')
          descriptionText.textContent = `Description : ${element.description}`
          description.appendChild(descriptionText)
        todoCard.append(title,description)
        document.querySelector('.content').appendChild(todoCard)  
}

const displayMyEvents = function(){
  let toDIsplay = projectList.find(x => x.id == this.dataset.index)
  if(this.dataset.index !== "12"){
  if(document.querySelector('.todo')){
    document.querySelectorAll('.todo').forEach(el => el.remove())
    toDIsplay.myEvents.forEach(el=> createTodoCards(el))
   }
   else if(!document.querySelector('.todo')){
    toDIsplay.myEvents.forEach(el => createTodoCards(el))
   }
  }
  else if(this.dataset.index == "12"){
    if(document.querySelector('.todo')){
      document.querySelectorAll('.todo').forEach(el => el.remove())
      toDIsplay.myEvents.forEach(el=> completedTodoCards(el))
     }
     else if(!document.querySelector('.todo')){
      toDIsplay.myEvents.forEach(el => completedTodoCards(el))
     }
  }
 
}


const setId = function(){
  return Math.floor(Math.random() * 1000)
}

const getProjectList = function(){
  return projectList
}

const projectFactory = function(title){
  title = title
  let id = setId()
  let myEvents = []
  return {title ,myEvents, id}
}

const displayList = function(el){
  let projectDom = document.createElement('div')
    projectDom.classList.add('project')
    
    let number = document.createElement('p')
     number.textContent = el.myEvents.length
     number.classList.add('counter')
    let text = document.createElement('button')
      text.textContent = el.title
      text.classList.add("project-click")
      text.dataset.index = el.id
    let deleteButton = document.createElement('button')
      deleteButton.textContent = "X"
      deleteButton.classList.add('delete')
      deleteButton.addEventListener('click', ()=>{
       projectList = projectList.filter(element => element.id !== el.id)
        store()
        loopThroughArray()
      })
  
    projectDom.append(number,text)
      if(el.title !== "All Projects" && el.title !== "Important" && el.title !== "Completed"){
        projectDom.appendChild(deleteButton)
      }
    document.querySelector('.sidebar').appendChild(projectDom)
}


const loopThroughArray = function(){
 if(document.querySelector('.project')){
  document.querySelectorAll('.project').forEach(el => el.remove())
  projectList.forEach(el => displayList(el))
 }
 else if(!document.querySelector('.project')){
  projectList.forEach(el => displayList(el))
 }
}


const createProject = function(){
  let title = document.getElementById('title').value
  let project = projectFactory(title)
  projectList.push(project)
  console.log(projectList)
  loopThroughArray()
  document.getElementById('form-container').remove()
  addListener()
  store()
  return project
}

const TodoFactory = function(title,description,dueDate){
  let dateOfCreation = format(new Date(), "MM/dd/yy")
  let timeLeft = formatDistance(new Date(dateOfCreation), new Date(dueDate))
  let id = setId()
  return {title,description,dueDate,dateOfCreation,timeLeft,id}
}

const createEvent = function(){
  let arr = document.querySelectorAll('.project-form:checked')
  let title = document.getElementById('title').value;
  let description = document.getElementById('description').value;
  let dueDate = format(new Date(document.getElementById('dueDate').value), "MM/dd/yy");
  let event = TodoFactory(title,description,dueDate)
    document.getElementById('form-container').remove()
  for (let i = 0; i < arr.length; i++) {
      let toAdd = projectList.find(el => el.id == arr[i].dataset.index)
        toAdd.myEvents.push(event)
          console.log(projectList)
    }
    if(!projectList[0].myEvents.includes(event))
    projectList[0].myEvents.push(event)
    store()
    createTodoCards(event)
  return event
}
const addListener = function(){
  let projectToDisplay = document.querySelectorAll('.project-click')
      projectToDisplay.forEach(el => el.addEventListener('click', displayMyEvents))
}

const store = function(){
  localStorage.setItem("array", JSON.stringify(projectList))
}

const retrieve = function(){
  if(localStorage.getItem("array")){
  projectList = JSON.parse(localStorage.getItem("array"))
  console.log(projectList)
  loopThroughArray()
}
}




 
   
 

export  {createEvent, createProject, loopThroughArray, getProjectList, addListener,retrieve}
