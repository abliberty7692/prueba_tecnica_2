import React from "react";
import './TaskDescription.css';

class TaskDescription extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            employee_key: this.props.employee_key,
            description: this.props.description,
            modify: false
        }
        this.setTitle = this.setTitle.bind(this);
        this.setEmployeeKey = this.setEmployeeKey.bind(this);
        this.setDescription = this.setDescription.bind(this);
    }

    setTitle(e) {
        let event = e.target.defaultValue;
        this.setState({
            title: event
        })
    }

    setEmployeeKey(e) {
        let event = e.target.defaultValue;
        this.setState({
            employee_key: event
        })
    }

    setDescription(e) {
        let event = e.target.defaultValue;
        this.setState({
            description: event
        })
    }

    render() {
        const employees_list=this.props.employees.map((employee, key)=>{
            return <option key={employee}>{employee}</option>
        })
        if(this.state.modify) {
            let submit_button = <button className="submit save" type="submit">Guardar</button>
        }
        return <div className="TaskDescription">
            <form className='nt_form'>
                <div className="form_field">
                    <h3>Titulo:</h3>
                        <input className="input" type="text" name='title' defaultValue={this.props.title} onChange={this.setTitle} ></input>
                </div>
                <div className="form_field">
                    <h3>Asignar:</h3>
                        <select className="input" onChange={this.setEmployeeKey} defaultValue={employees_list[this.props.employee_key]}>
                            {employees_list}
                        </select>
                </div>
                <div className="form_field">
                    <h3>Descripción:</h3>
                        <textarea className="input description" defaultValue={this.props.description} onChange={this.setDescription} >
                        </textarea>
                </div>
                <div className="form_field">
                    <button className="submit" type="submit">{this.state.modify?"Guardar": "Modificar"}</button>
                </div>
            </form>
        </div>
    }
}

export default TaskDescription;