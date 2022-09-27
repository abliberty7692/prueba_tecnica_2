//import './App.css';
import Header from './components/Header.jsx';
//import PendingTasks from './components/PendingTasks.jsx';
//import NewTask from './components/NewTask';
import TaksDescription from './components/TaskDescription';
function App() {
  return (
    <div className="App">
    <Header title="Nueva Tarea" uname="David S. Betanzos" mail="dbetanzos@glwinba.com"/>
    <TaksDescription title="Generar el reporte" employee_key={3} description="Generar el reporte" employees={["Arantxa Herrera", "David Betanzos", "Alan Fernandez", "Esteban Avelar", "Cynthia Fonseca"]}/>
    </div>
  );
}

export default App;
