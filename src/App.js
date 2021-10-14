import './App.css';
import React, {useState} from 'react';
import NewTask from './components/NewTask';
import TaskList from './components/TaskList';
import OptionList from './components/OptionList';

export default function App(){
  const [display, setDisplay] = useState(false);

  const [newTask, setNewTask] = useState({});
  const handleChange = ({target}) => {
    const {name, value} = target;
    if(value === "+" || value === " "){
      return;
    }
    setDisplay(true);
    setNewTask((prev) => ({
      ...prev,
      id: Date.now(),
      [name]: value
    }));
  }

  const [allTasks, setAllTasks] = useState([]);
  const handleSubmit = (e) => {
    const value = e ? e.target.value: null;
    if(value){
      setAllTasks(prev =>[...prev, {
        id: Date.now(),
        ["mytag"]: value
      }]);
      setNewTask({});
    }
    if(!value && !newTask.mytag && allTasks.length > 0){
      setDisplay(false);
    }
    if(value || !newTask.mytag) return;
    setAllTasks(prev => [...prev, newTask]);
    setNewTask({});
  };

  const handleDelete = (taskIdToRemove) => {
    setAllTasks(prev => prev.filter(
      task => task.id !== taskIdToRemove
    ));
  }
  
  let styles=[{},{}];
  if(display){
    styles =[{"background-color": "#ebebeb"}, {}];
  }
  else if(!display && allTasks.length>0){
    styles =[{"background-color": "white", "padding":"0px"},{"background-color": "#ebf6ff"}];
  }

  return(
    <main className="position" id="main">
      <div className="position">

        <div id="h1p">
          <h1>TAGS</h1>
          <p>Select time for your event</p>
        </div>

        <div>
          <div style={styles[0]} id="input-area">

            <TaskList styles={styles[1]} allTasks={allTasks} handleDelete={handleDelete}/>

            <NewTask newTask={newTask} allTasks={allTasks} handleChange={handleChange} handleSubmit={handleSubmit}/>
          </div>

          {display && (
            <OptionList newTask={newTask} handleSubmit={handleSubmit}/>
          )}
        </div>
      </div>
    </main>
  );
}