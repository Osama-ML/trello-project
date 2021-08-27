let mainCointainer = document.querySelector('#manipulate');

// Creating a column of tasks

let column1 =  new List('To do');
let columnHTML = document.createElement('div');
columnHTML.className = 'card';
columnHTML.textContent = column1.title;
mainCointainer.appendChild(columnHTML)

// Creating tasks

let task1 = new Task('task1')
let task2 = new Task('task2')
let task3 = new Task('task3')

column1.addTask(task1)
column1.addTask(task2)
column1.addTask(task3)

let tasksHTML = document.createElement('ul');
columnHTML.appendChild(tasksHTML)


column1.tasks.map(task => {
      let newTask = document.createElement('li');
      newTask.textContent = task.title
      tasksHTML.appendChild(newTask)
})