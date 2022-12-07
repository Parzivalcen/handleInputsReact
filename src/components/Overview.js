import React, {Component} from "react";

class Overview extends Component {
    render(){
        const taskComponents = this.props.tasks.map((task, i)=>(
            <li key={i} className='task'>
                {!task.editing ? 
                <div>
                    <span>{task.taskNumber} - {task.text}</span>
                    <button onClick={(e)=>this.props.editTask(e, task.id)}>Edit</button>
                    <button onClick={()=>this.props.deleteTask(task.id)}>delete</button>
                </div> 
                :
                <div>
                    <input onChange={(e)=>this.props.editInputChange(e, task.id)} value={task.text}/>
                    <button onClick={(e)=>this.props.editTask(e, task.id)}>save</button>
                    <button onClick={()=>this.props.deleteTask(task.id)}>delete</button>
                </div> 
                }
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