import React from 'react';
import './PendingTasks.css';
import Task from './Task';
//import TaskDisplay from './TaskDisplay';

class PendingTasks extends React.Component {

    constructor(props){
        super(props);
        this.tasklist=this.get_tasks();
        this.state={
            displaylist: this.tasklist,
            filterTerm: ''
        }
        this.filter = this.filter.bind(this);
    }

    filter(event) {
        this.setState({filterTerm: event.target.value});
        let aux_displaylist = this.tasklist;
        let dl = [];
        let ft=this.state.filterTerm;//Corregir error
        if(ft.length===0) this.setState({displaylist:this.tasklist});
        else {
            let status_features = {
                0:"Pendiente",
                1:"En Proceso",
                2:"Completada"    
            }
            for(let i=0;i<aux_displaylist.length;i++){
                    if((aux_displaylist[i][0]+aux_displaylist[i][1]+status_features[aux_displaylist[i][2]]).includes(ft))
                        dl.push(aux_displaylist[i]);
            }
            console.log(this.state.filterTerm);
            this.setState({displaylist:dl});
        }
    }

    get_tasks() {
        return [
        ["Creación de Módulo", "Alan Fernández", 1],
        ["Generación de Reporte", "Esteban Estrada", 0],
        ["Check Tablero", "Cynthia Fonseca", 2],
        ["Atención a proveedores", "Arantxa Herrera", 1],
        ["Generación de Reporte", "Esteban Estrada", 0]
        ];
    }

    render() {
        //this.setState({displaylist:tasklist});
        let lists=this.state.displaylist.map((t)=>{
            return <Task task_title={t[0]} task_assigned_to={t[1]} task_status={t[2]}/>
        });
        return <div className='PendingTasks'>
            <input className="filter-input" onChange={this.filter} id="filter" type="text" placeholder='Filtro: Nombre, Asignado, Estatus'/>
            <div class="button-set">
                <button className="button button-blue" type="submit">Nueva Tarea</button>
                <button className="button button-green" type="submit">Consultados</button>
            </div>
            <div className="tasks-container">
                {//<TaskDisplay tasks={tasklist}/>
                }
                {lists}

            </div>
        </div>
    }
}

export default PendingTasks;