let projectList = [];

const projectFactory = function(title){
  title = title
  let myEvents = []
  return {title ,myEvents}
}
const createProject = function(){
  let title = document.getElementById('title').value
  let project = projectFactory(title)
  projectList.push(project)
  console.log(projectList)
  return project
}

let allProjects = projectFactory("All Projects")
let important = projectFactory("Important")
let finished = projectFactory("Finished")

projectList.push(allProjects,important,finished)



const TodoFactory = function(title,description,dueDate,priority){
  return {title,description,dueDate,priority}
}

const createEvent = function(){
  let title = document.getElementById('title').value;
  let description = document.getElementById('description').value;
  let dueDate = document.getElementById('dueDate').value;
  let priority = document.getElementById('priority').value;

  let event = TodoFactory(title,description,dueDate,priority)
  console.log(event)
  return event
}

export  {createEvent, createProject}
