import React from 'react';
import './PendingTasks.css';
import Task from './Task';
//import TaskDisplay from './TaskDisplay';

class PendingTasks extends React.Component {

    render() {
        const tasklist = [
        ["Creación de Módulo", "Alan Fernández", 1],
        ["Generación de Reporte", "Esteban Estrada", 0],
        ["Check Tablero", "Cynthia Fonseca", 2],
        ["Atención a proveedores", "Arantxa Herrera", 1],
        ["Generación de Reporte", "Esteban Estrada", 0]
        ];
        let lists=tasklist.map((t)=>{
            return <Task task_title={t[0]} task_assigned_to={t[1]} task_status={t[2]}/>
        });
        return <div className='PendingTasks'>
            <input className="filter-input" type="text" placeholder='Filtro: Nombre, Asignado, Estatus'/>
            <div class="button-set">
                <button className="button button-blue" type="submit">Nueva Tarea</button>
                <button className="button button-green" type="submit">Consultados</button>
            </div>
            <div className="tasks-container">
                {//<TaskDisplay tasks={tasklist}/>
                }
                <div>{lists}</div>

            </div>
        </div>
    }
}

export default PendingTasks;