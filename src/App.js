//import './App.css';
import Header from './components/Header.jsx';
import PendingTasks from './components/PendingTasks.jsx';
function App() {
  return (
    <div className="App">
    <Header title="Tareas Pendientes" uname="David S. Betanzos" mail="dbetanzos@glwinba.com"/>
    <PendingTasks/>
    </div>
  );
}

export default App;
