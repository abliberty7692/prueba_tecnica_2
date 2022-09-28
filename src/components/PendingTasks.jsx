import React from 'react';
import './PendingTasks.css';
import Task from './Task';
import { Link } from 'react-router-dom';
//import TaskDisplay from './TaskDisplay';

class PendingTasks extends React.Component {

    constructor(props){
        super(props);
        this.tasklist=this.get_tasks();
        this.state={
            displaylist: this.tasklist,
            filterTerm: ""
        }
        this.get_tasks = this.get_tasks.bind(this);
        this.filter = this.filter.bind(this);
    }

    componentDidMount() {
        let init = {
            method: "GET",
            headers: {
                'Content-type': 'aplication/json'
            }
        }
        fetch("http://127.0.0.1:8081/actividades", init)//.then(response => response.json())
            .then(data=>data.json())
            .then(response=>{
                let tasks = [];
                response.forEach(reg=>{
                    tasks.push([reg.Id, reg.Actividad, reg.Nombre, reg.Estatus]);
                });
                return tasks;
            })
            .then(tasks=>{
                this.setState({displaylist: tasks});
            });
    }

    filter(event) {
        this.setState({filterTerm: event.target.value});
        let aux_displaylist = this.tasklist;
        let dl = [];
        let ft=this.state.filterTerm;//Corregir error
        if(ft.length===0) this.setState({displaylist:this.tasklist});
        else {
            for(let i=0;i<aux_displaylist.length;i++){
                    if((aux_displaylist[i][1]+aux_displaylist[i][2]+aux_displaylist[i][3]).includes(ft))
                        dl.push(aux_displaylist[i]);
            }
            this.setState({displaylist:dl});
        }
    }

    get_tasks() {
        let init = {
            method: "GET",
            headers: {
                'Content-type': 'aplication/json'
            }
        }
        let tasks = [];
        fetch("http://127.0.0.1:8081/actividades", init)//.then(response => response.json())
            .then(data=>data.json())
            .then(response=>{
                response.forEach(reg=>{
                    tasks.push([reg.Id, reg.Actividad, reg.Nombre, reg.Estatus]);
                });
            });
        return tasks
    }

    render() {
        //this.setState({displaylist:this.tasklist});
        //console.log(this.state.displaylist);
        let lists = this.state.displaylist.map((t, k)=>{
            return <Task key={k} task_title={t[1]} task_assigned_to={t[2]} task_status={t[3]}/>
        });
        return <div className='PendingTasks'>
            <input className="filter-input" onKeyUpCapture={this.filter} id="filter" type="text" placeholder='Filtro: Nombre, Asignado, Estatus'/>
            <div class="button-set">
                <Link to="/newtask">
                    <button className="button button-blue" type="submit">Nueva Tarea</button>
                </Link>
                <button className="button button-green" type="submit">Consultados</button>
            </div>
            <div className="tasks-container">
                {lists}
            </div>
        </div>
    }
}

export default PendingTasks;