
import { useState } from 'react';
import './App.css';
import Todos from './components/Todos';
import data from './data';

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState(data);

  const handleChange = (e) => {
    // console.log(e.target.value)
    setTask(e.target.value);
  };
  const handleClick = () => {
    setTodos((prev) => [...prev, {task:task}]);
  };
  console.log(todos) 
  return (
    <div className="container">
      <h2>Add your Task here</h2>
       <div className="inp-holder">
        <input type="text" placeholder='Add task' className='inp' onChange={handleChange}/>
        <button className='btn' onClick={handleClick}>+</button>
       </div>
       <Todos todo={todos}/>
    </div>
  );
}

export default App;
