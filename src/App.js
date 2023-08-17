import React, { useState } from 'react';
import './App.css';
import { useEffect } from 'react';
import Todolist from './Todolist';

function App() {

  const [todo,settodo]=useState("");
  const [todoList, settodoList]=useState([]);
  let todotype='';

  const addHandler=(e)=>{
    e.preventDefault();
    if(todo!==""){
      settodoList([...todoList,{text: todo,checked: false}])
      //console.log(todoList)
      settodo("");
    }
    else{
      console.log("hello")
    }
  }

  const handledone = (index) => {
    
    const newList = [...todoList];
    
    newList[index].checked = true;
    settodoList(newList);
 }

 const handledelete = (index) => {
    

  const newList = todoList.filter((_, i) => i !== index);
  settodoList(newList);
};


  


  const clearHandler=(e)=>{
    e.preventDefault();
    settodo("");

  }
  return (
    <div className="App">
      <div className='Header'>
        <h1>To Do Diary</h1>
    
      <form className='Entry'>
        <input type='text' value={todo} name='listPoint' className='Textinput' onChange={(e)=>{settodo(e.target.value);}} placeholder='Enter task here....'></input>
        <button onClick={addHandler} className='Add'>Add</button>
        <button  onClick={clearHandler} className='Clear' >clear</button>
      </form>
      </div>
      <div>
          <Todolist list={todoList} done={handledone} remove={handledelete}/>
      </div>
      </div>
  );
}

export default App;
