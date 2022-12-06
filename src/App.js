import { nanoid } from "nanoid";
import React, {Component} from "react";
import Overview from "./components/Overview";

class App extends Component {
  constructor(){
    super();

    this.state = {
      task: {
        text: '', 
        taskNumber: 0, 
        id: nanoid(),
        editing: false
      },
      tasks: [],
  
    };
  };
  render(){
    const {task, tasks} = this.state;
    const handleChange = (e) =>{
      const {value} = e.target;
      this.setState({task: {text: value,taskNumber: tasks.length, id: task.id, editing: false}})
    }
    const handleSubmit = (e) =>{
      e.preventDefault();
      this.setState((prevState)=>{

        return{
          task: {...prevState.task, taskNumber: prevState.tasks.length + 1, id: nanoid()},
          tasks: [...prevState.tasks, task]
        }
      })
    }
    const deleteTask = (taskid) => {
          this.setState(prevState=>{
            const oldTasks = prevState.tasks
            let newTasks = oldTasks.filter(oldTask=> oldTask.id !== taskid)
            console.log('new', typeof(taskid) )
            return {
              tasks: [...newTasks]
            }
          })
        }
      const editTask = (e, taskid) =>{
        this.setState(prevState=>{
          const oldTasks = prevState.tasks;
          let newTasks = oldTasks.map(task=>{
            if(taskid === task.id){
              
              return {...task, editing: !task.editing}
            }
            return task
          })
          console.log(newTasks)
          return{
            tasks: [...newTasks]
          }
        })
      }
      // console.log(tasks);
    return (
      <div className="App">
        <form onSubmit={handleSubmit}>
          <label htmlFor="taskInput">Enter task: </label>
          <input value={task.text} onChange={handleChange} type="text" name="taskInput"/>
          <button type="submit" >Add task</button>
        </form>
        <Overview tasks={tasks} 
        deleteTask={deleteTask}
        editTask={editTask} />

      </div>
  )};
}

export default App;
