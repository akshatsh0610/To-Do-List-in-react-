import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleCheck,faPen,faTrashCan
} from '@fortawesome/free-solid-svg-icons';
import './App.css';
function App() {
 
  //tasks 
  const [toDo,setToDo]=useState([
    {"id":1,"title":"Task 1","status":false},
    {"id":2,"title":"Task 2","status":false}
  ]);
  // temp state
  const [newTask,setNewTask]=useState('');
  const [updateDate,setupdateDate]=useState('');

  // add task
  const addTask=()=>{
    //
  }

  //Delete task
  const deleteTask=(id)=>{
    //
  }

  //mark task as done or completed
  const markDone=(id)=>{
    //
  }

  // cancel update 
  const cancelUpdate=()=>{
    //
  }

  //change task for update
  const changeTaks=(e)=>{
    //
  }

  //update task
  const updateTask=()=>{
    //
  }
  return (
    <div className="container App">
        <br></br>
        <h2>To Do List App</h2>
        <br></br>

        {/* Display Todo */}
        {toDo && toDo.length ? '' : 'No tasks...'}
        {toDo && toDo.map((task,index)=>{
          return(
            <React.Fragment>
                <div className='col taskBg'>
                    <div className={task.status ? 'done' : ''}>
                      <span className='taskNumber'>{index+1}</span>
                      <span className='taskText'>{task.title}</span>
                    </div>
                    <div className='iconsWrap'>
                      <span>
                        <FontAwesomeIcon icon={faCircleCheck}/>
                      </span>
                      <span>
                        <FontAwesomeIcon icon={faPen}/>
                      </span>
                      <span>
                        <FontAwesomeIcon icon={faTrashCan}/>
                      </span>
                    </div>
                </div>
            </React.Fragment>
          )
        })}

    </div>
  );
}

export default App;
