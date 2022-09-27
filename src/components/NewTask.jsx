import React from 'react';
import './NewTask.css';

class NewTask extends React.Component {
    render() {
        const employees_list=this.props.employees.map((employee)=>{
            return <option>{employee}</option>
        })
        return <div className="NewTask">
            <form className='nt_form'>
                <div className="form_field">
                    <h3>Titulo:</h3>
                        <input className="input" type="text" name='title'/>
                </div>
                <div className="form_field">
                    <h3>Asignar:</h3>
                        <select className="input">
                            {employees_list}
                        </select>
                </div>
                <div className="form_field">
                    <h3>Descripción:</h3>
                        <textarea className="input">
                        </textarea>
                </div>
                <div className="form_field">
                    <button className="submit" type="submit">Guardar</button>
                </div>
            </form>
        </div>
    }
}

export default NewTask;