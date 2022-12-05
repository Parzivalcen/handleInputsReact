import React, {Component} from "react";

class Overview extends Component {
    render(){
        const taskComponents = this.props.tasks.map((task, i)=>(
            <li key={i} className='task' id={task.id}>
                {task.taskNumber + 1} - {task.text ? task.text : 'noName' } 
                {task.editing ? <button>save</button> :
                <button onClick={()=>this.props.editTask(task.id)}>edit</button> }
                
                <button onClick={()=>this.props.deleteTask(task.id)}>delete</button>
            </li>
        ))
        return(
            <div>
                <ul>
                    {taskComponents}
                </ul>
            </div>
        )
    }
}

export default Overview;