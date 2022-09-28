import React from 'react';
import './NewTask.css';

class NewTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: [],
            title: "",
            selected_employee: "",
            description: ""
        }
        this.setTitle = this.setTitle.bind(this);
        this.setSelEmployee = this.setSelEmployee.bind(this);
        this.setDescription = this.setDescription.bind(this);
        this.createTask = this.createTask.bind(this);
    }

    componentDidMount() {
        let init = {
            method: "GET",
            headers: {
                'Content-Type': 'aplication/json'
            }
        }
        fetch("http://127.0.0.1:8081/usuarios", init)
            .then(response => response.json())
            .then(data => {
                let employeeslist = [];
                employeeslist = data.map(employee=>{
                    return [employee.Nombre];
                })
                return employeeslist;
            })
            .then(employeeslist=>{
                this.setState({employees: employeeslist});
            });
    }

    setTitle(e) {
        this.setState({
            title: e.target.value
        })
    }

    setSelEmployee(e) {
        this.setState({
            selected_employee: e.target.value
        })
    }

    setDescription(e) {
        this.setState({
            description: e.target.value
        })
    }

    createTask() {

    }


    render() {
        const employees_list=this.state.employees.map((employee)=>{
            return <option>{employee}</option>
        })
        return <div className="NewTask">
            <form className='nt_form'>
                <div className="form_field">
                    <h3>Titulo:</h3>
                        <input onChange={this.setTitle} className="input" type="text" name='title' value={this.state.title}/>
                </div>
                <div className="form_field">
                    <h3>Asignar:</h3>
                        <select onChange={this.setSelEmployee} className="input" value={this.state.selected_employee}>
                            {employees_list}
                        </select>
                </div>
                <div className="form_field">
                    <h3>Descripción:</h3>
                        <textarea onChange={this.setDescription} className="input" value={this.state.description}>
                        </textarea>
                </div>
                <div className="form_field">
                    <button onClick={this.createTask} className="submit" type="submit">Guardar</button>
                </div>
            </form>
        </div>
    }
}

export default NewTask;