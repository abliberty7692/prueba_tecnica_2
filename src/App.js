//import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams
} from "react-router-dom";
import Login from './components/Login';
import Header from './components/Header.jsx';
import PendingTasks from './components/PendingTasks.jsx';
import NewTask from './components/NewTask';
//import TaksDescription from './components/TaskDescription';
import TaskDescription from "./components/TaskDescription";


function App() {

  return (
    <div>
      <Router>
          <Routes>
            <Route exact path="/" element={<Login/>} />
            <Route exact path="/home" element={<div><Header title="Tareas Pendientes" uname={localStorage.getItem("nombre")} mail={localStorage.getItem("email")}/><PendingTasks tasklist={get_tasks()}/></div>} />
            <Route exact path="/newtask" element={<div><Header title="Nueva Tarea" uname={localStorage.getItem("nombre")} mail={localStorage.getItem("email")}/><NewTask/></div>} />
            <Route exact path="/task/:id" element={<div><Header title="Detalles de Tarea" uname={localStorage.getItem("nombre")} mail={localStorage.getItem("email")}/><IdTask/></div>} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;

function IdTask() {
  let { id } = useParams();
  return <TaskDescription t_id={id}/>
}

function get_tasks() {
        let tasks = [];
        let init = {
            method: "GET",
            headers: {
                'Content-type': 'aplication/json'
            }
        }
        fetch("http://127.0.0.1:8081/actividades", init)//.then(response => response.json())
            .then(data=>data.json())
            .then(response=>{
                response.forEach(reg=>{
                    tasks.push([reg.Id, reg.Actividad, reg.Nombre, reg.Estatus]);
                });
            });
        return tasks;
    }