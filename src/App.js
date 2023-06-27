 
import './App.css';
import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleCheck,faPen,faTrashCan} from '@fortawesome/free-solid-svg-icons'

function App() {

 const [todo,settodo] = useState([
 ]) ;
 const [newtask,setnewtask] = useState("");
 const [update,setupdate] = useState("");

 const addtask =() =>{
  if(newtask){
    let num = todo.length +1;
    let newentry = {id:num ,title:newtask,stat:false}
    settodo([...todo,newentry])
    setnewtask('');
  }
 }
 const deletetask=(id)=>{
  let newtask = todo.filter(task => task.id !== id)
   settodo(newtask);
   console.log(newtask);
 }
 const markdonetask =(id)=>{

 }
 const changetask =()=>{

 }

  return (
    <div className="App">

      <br /> <br />
      <h2>To DO List App (React_Js)</h2>
      <br /> <br /> 
      
        
      
        <div className="row">
        <div className="col" style={{display:'flex'}}>
          <input type="text" style={{width:'70%',marginLeft:'15%'}}className='form-control form-control-lg' placeholder='Enter Your Task Here'  value={newtask} onChange={(e) => setnewtask(e.target.value)}/>
          <div className="col-auto" style={{display:'flex',alignItems:'center'}}>
          <button className='btn btn-lg btn-success'  onClick={addtask}>Add</button>
          </div>
       
        </div>
        
      </div>
       
      {todo && todo.length ? '' : 'No Task....'}
      {todo && todo
      .map((task,index) =>{
        return(
          <React.Fragment  >
            <div className="col taskbg">
              <div className={task.stat ? 'done':''}>
<span className="tasktext"> {index +1}: </span>

<span className="tasktext">{task.title}</span>
              </div>

              <div className="iconswrap">
   
              <span title='Delete' onClick={()=> deletetask(task.id)

              } >  <FontAwesomeIcon icon={faTrashCan}/></span>
              </div>
            </div>
          
          </React.Fragment>
        )
      })}
    </div>
  );
}



export default App;
