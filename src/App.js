//import './App.css';
import Header from './components/Header.jsx';
//import PendingTasks from './components/PendingTasks.jsx';
import NewTask from './components/NewTask';
function App() {
  return (
    <div className="App">
    <Header title="Nueva Tarea" uname="David S. Betanzos" mail="dbetanzos@glwinba.com"/>
    <NewTask employees={["Alan Fernández", "Arantxa Herrera", "Esteban Avelar", "Cynthia Fonseca"]}/>
    </div>
  );
}

export default App;
