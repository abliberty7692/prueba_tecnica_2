import React from "react";
import './TaskDescription.css';
import fileimg from '../assets/files.png';

class TaskDescription extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "Generar Reporte",
            employee_key: 1,
            description: "Generar el reporte",
            modify: false,
            selectedFile: null,
            isSelectedFile: false
        }
        this.getInitialData = this.getInitialData.bind(this);
        this.setTitle = this.setTitle.bind(this);
        this.setEmployeeKey = this.setEmployeeKey.bind(this);
        this.setDescription = this.setDescription.bind(this);
        this.save_changes = this.save_changes.bind(this);
        this.modify_data = this.modify_data.bind(this);
        this.getDropedFiles = this.getDropedFiles.bind(this);
        this.getEmployees = this.getEmployees.bind(this);
    }

    getInitialData() {
        this.setState({
            title: "Generar Reporte",
            employee_key: 1,
            description: "Generar el reporte",
            modify: false,
            selectedFile: null,
            isSelectedFile: false
        })
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

    save_changes() {
        console.log("Saved")
    }

    modify_data() {
        this.setState({
            modify: true
        })
    }

    getDropedFiles(e) {
        e.preventDefault();
        e.stopPropagation();
        if(e.dataTransfer.files && e.dataTransfer.files[0]) {
            this.setState({
                selectedFile: e.dataTransfer.files[0],
                isSelectedFile: true
            })
        }
    }

    getEmployees() {
        return ["David Betanzos", "Cynthia Fonseca", "Alan Fernandez", "Esteban Avelar", "Arantxa Herrera"]
    }

    render() {
        const employees_list=this.getEmployees().map((employee, k)=>{
            return <option key={employee}>{employee}</option>
        })
        let submit_button = null;
        if(this.state.modify) {
            submit_button = <button className="submit save" onClick={this.save_changes}>Guardar</button>
        } else {
            submit_button = <button className="submit modify" onClick={this.modify_data}>Modificar</button>
        }
        let file_data = null;
        if(this.state.isSelectedFile) {
                    file_data = <div className="selected_file">
                    <img className="file-img" src={fileimg} alt="file"/>
                    <p className="file-name">{this.state.selectedFile.name}</p>
                    <p className="file-type">{this.state.selectedFile.type}</p>
                    <p className="file-size">{this.state.selectedFile.size}</p>
                  </div>
        } else { file_data = null}
        return <div className="TaskDescription">
            <form className='nt_form'>
                <div className="form_field">
                    <h3>Titulo:</h3>
                        <input className="input" type="text" readOnly={!this.state.modify} name='title' defaultValue={this.state.title} onChange={this.setTitle} ></input>
                </div>
                <div className="form_field">
                    <h3>Asignar:</h3>
                        <select disabled={!this.state.modify} className="input" onChange={this.setEmployeeKey} defaultValue={employees_list[this.state.employee_key]}>
                            {employees_list}
                        </select>
                </div>
                <div className="form_field">
                    <h3>Descripción:</h3>
                        <textarea className="input description" readOnly={!this.state.modify} defaultValue={this.state.description} onChange={this.setDescription} >
                        </textarea>
                </div>
                <div className={"dnd_file "+(this.state.isSelectedFile? "no_display":"")} >
                    <input type="file" readOnly={!this.state.modify} id="input-file-upload" onChange={e=>{console.log("Hola")}} multiple={true} />
                    <label id="label-file-upload" htmlFor="input-file-upload" onDragOver={e=>{
                        e.preventDefault(); 
                        e.stopPropagation();
                    }} onDrop={this.state.modify?this.getDropedFiles:null}>
                        <div>
                            <p className="dnd_text">Arrastra tu archivo o </p>
                                <button className="upload-button">Subelo desde tu computadora</button>
                        </div> 
                    </label>
                </div>
                {file_data}       
            </form>
                <div className="form_field">
                    {submit_button}
                </div>
        </div>
    }
}

export default TaskDescription;