import React from 'react';
import './Task.css';
import person from '../assets/user.png';
import clock from '../assets/clock.png';

class Task extends React.Component {
    render() {
        let current_status = this.props.task_status;
        return <div className='Task'>
            <h3 className="task-title">{this.props.task_title}</h3>
            <p className="content"><img src={person} alt="person"/>Asignado: {this.props.task_assigned_to}</p>
            <p className="content"><img src={clock} alt="clock"/>Estátus: <span className={current_status.replace(" ", "_")}>{current_status}</span></p>
            <button className="see">Ver</button>
        </div>
    }
}

export default Task;