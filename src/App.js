import React, {useState} from 'react';
import TaskList from './TaskList.js';
import NewTask from './NewTask.js';

function App() {
  const [tasks, setTasks] = useState([]);
  const [nextId, setNextId] = useState(0);

  
  const createTask = description => {
    //create Task
    setTasks(tasks => ([...tasks,{id: nextId, description, done: false}]));
    setNextId(nextId + 1);
  }
  
  const markTaskDone = id => {

    const newTaskList = tasks.map(task => {
      if(task.id === id) {
        task.done = true;
      }
      return task;
    });
    setTasks(newTaskList);
  }

  const deleteTask = id => {
    setTasks(tasks.filter(task => task.id !== id));
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="bg-light p-5 rounded-3">
            <h1 className="display-4"> Todo App</h1>    
          </div>
          <NewTask createTask = { createTask } />
          <br />
          <TaskList deleteTask={deleteTask} tasks={ tasks } markTaskDone = { markTaskDone } />
        </div>    
      </div>
    </div>
  );
}

export default App;
