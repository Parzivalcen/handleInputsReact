import React, {Component} from "react";
import Overview from "./components/Overview";

class App extends Component {
  constructor(){
    super();

    this.state = {
      task: {
        text: '', 
        taskNumber: 0, 
        id: '' 
      },
      tasks: [],
  
    };
  };
  render(){
    const {task, tasks} = this.state;
    const handleChange = (e) =>{
      const {value} = e.target;
      this.setState({task: {text: value,taskNumber: tasks.length}})
    }
    const handleSubmit = (e) =>{
      e.preventDefault();
      this.setState((prevState)=>{

        return{
          task: {...prevState.task, taskNumber: prevState.tasks.length + 1},
          tasks: [...prevState.tasks, task]
        }
      })
    }
    return (
      <div className="App">
        <form onSubmit={handleSubmit}>
          <label htmlFor="taskInput">Enter task: </label>
          <input value={task.text} onChange={handleChange} type="text" name="taskInput"/>
          <button type="submit" >Add task</button>
        </form>
        <Overview tasks={tasks} />
      </div>
  )};
}

export default App;
