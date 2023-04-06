import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleCheck,faPen,faTrashCan
} from '@fortawesome/free-solid-svg-icons';
import './App.css';
function App() {
 
  //tasks 
  const [toDo,setToDo]=useState([]);
  // temp state
  const [newTask,setNewTask]=useState('');
  const [updateDate,setupdateData]=useState('');

  // add task
  const addTask=()=>{
    if(newTask){
      let num=toDo.length+1;
      let newEntry={id:num,title:newTask,status:false};
      setToDo([...toDo,newEntry])
      setNewTask('');
    }
  }

  //Delete task
  const deleteTask=(id)=>{
    let newTask=toDo.filter(task => task.id !== id);
    setToDo(newTask);
  }

  //mark task as done or completed
  const markDone=(id)=>{
    let newTask=toDo.map(task=>{
      if(task.id===id)
      {
        return ({...task,status:!task.status});
      }
      return task;
    })
    setToDo(newTask);
  }

  // cancel update 
  const cancelUpdate=()=>{
    setupdateData('');
  }

  //change task for update
  const changeTask=(e)=>{
    let newEntry={
      id:updateDate.id,
      title:e.target.value,
      status:updateDate.status ? true : false
    };
    setupdateData(newEntry);
  }

  //update task
  const updateTask=()=>{
    let filterRecords=[...toDo].filter(task=>task.id!==updateDate.id);
    let updatedObject=[...filterRecords,updateDate]
    setToDo(updatedObject)
    setupdateData('')
  }
  return (
    <div className="container App">
        <br></br>
        <h2>To Do List App</h2>
        <br></br>

        {/* Update task */}
        {updateDate && updateDate ? (
          <>
            <div className='row'>
              <div className='col'>
                <input 
                  value={updateDate && updateDate.title}
                  onChange={(e)=>changeTask(e)}
                  className='form-control form-control-lg'
                />
              </div>
              <div className='col-auto'>
                <button 
                  onClick={updateTask}
                  className='btn btn-lg btn-success mr-20'
                >
                  Update
                </button>
                <button 
                  onClick={cancelUpdate}
                  className='btn btn-lg btn-warning'
                >
                  Cancel
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className='row'>
            <div className='col'>
              <input 
                value={newTask}
                onChange={(e)=>setNewTask(e.target.value)}
                className='form-control form-control-lg'/>
            </div>
            <div className='col-auto'>
              <button
                onClick={addTask} 
                className='btn btn-lg btn-success'>
                Add Task
              </button>
            </div>
          </div>
        )}
        <br/>
        {toDo && toDo.length ? '' : 'No tasks...'}
        {toDo && toDo
        .sort((a,b)=>a.id>b.id ? 1:-1)
        .map((task,index)=>{
          return(
            <React.Fragment>
                <div className='col taskBg'>
                    <div className={task.status ? 'done' : ''}>
                      <span className='taskNumber'>{index+1}</span>
                      <span className='taskText'>{task.title}</span>
                    </div>
                    <div className='iconsWrap'>
                      <span title='Completed / Not Completed'
                        onClick={(e)=>markDone(task.id)}  
                      >
                        <FontAwesomeIcon icon={faCircleCheck}/>
                      </span>
                      {task.status ? null : (
                        <span title='Edit'
                          onClick={()=>setupdateData({id:task.id,
                          title:task.title,
                          status:task.status ? true : false
                          })}
                        >
                          <FontAwesomeIcon icon={faPen}/>
                        </span>
                      )}
                      <span title='Delete' onClick={()=>deleteTask(task.id)}>
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
