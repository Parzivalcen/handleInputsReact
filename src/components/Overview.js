import React, {Component} from "react";

class Overview extends Component {
    render(){
        const taskComponents = this.props.tasks.map((task, i)=>(
            <li key={i} className='task' id={task.id}>
                {!task.editing ? 
                <div>
                    <span>{task.taskNumber} - {task.text}</span>
                </div> :
                <input></input>
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