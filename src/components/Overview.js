import React, {Component} from "react";

class Overview extends Component {
    render(){
        const taskComponents = this.props.tasks.map((task, i)=>(
            <li key={i}>
                {task.taskNumber + 1} - {task.text} <button>edit</button>
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