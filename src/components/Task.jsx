import React from 'react';
import './Task.css';

class Task extends React.Component {
    render() {
        let status_features = {
            0:["Pendiente", "pending"],
            1:["En Proceso", "process"],
            2:["Completado", "completed"]
        }   
        let current_status = status_features[this.props.task_status];
        return <div className='Task'>
            <h3 className="title">{this.props.task_title}</h3>
            <p className="content">Asignado: {this.props.task_assigned_to}</p>
            <p className="content">Estátus: <span className={current_status[1]}>{current_status[0]}</span></p>
            <button className="see">Ver</button>
        </div>
    }
}

export default Task;