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
import TaksDescription from './components/TaskDescription';
import TaskDescription from "./components/TaskDescription";


function App() {

  return (
    <div>
      <Router>
          <Routes>
            <Route exact path="/" element={<Login/>} />
            <Route exact path="/home" element={<div><Header/><PendingTasks/></div>} />
            <Route exact path="/newtask" element={<div><Header/><NewTask/></div>} />
            <Route exact path="/task/:id" element={<div><Header/><IdTask/></div>} />
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