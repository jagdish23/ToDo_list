import "./App.css";
import { useState } from "react";

function App() {
  let [todolist, setTodolist] = useState([]);

 

  let SaveData = (event) => {
    let toname = event.target.toname.value;
    if (!todolist.includes(toname)) {
      let finalTodo = [...todolist, toname];
      setTodolist(finalTodo);
    } else {
      alert("ToDo name already Exists.....");
    }
    event.preventDefault();
  };

  let list = todolist.map((value, index) => {
    return (
      <TodoListItem key={index} value={value}  indexNumber={index}
      todolist={todolist}
      setTodolist={setTodolist}
 />
      
    )
  });
    

  return (
    <div className="App">
      <h2>ToDo List</h2>
      <form onSubmit={SaveData}>
        <input type="text" name="toname" />
        <button>Save</button>
      </form>

      <div className="outerDiv">
        <ul>{list}</ul>
      </div>
    </div>
  );
}

export default App;

function TodoListItem({ value , indexNumber , todolist , setTodolist}) {

  let [status,setStatus]=useState(false);
  let deleteRow=()=>{
    let finalData=todolist.filter((v,i)=>i!=indexNumber)
    setTodolist(finalData)
    
    
  } 

  let checkStatus=()=>{
    setStatus(!status)
  }
  return (
    <li className={(status)?'completetodo':''} onClick={checkStatus}>
    {indexNumber+1}  {value} <span onClick={deleteRow}>&times;</span>
    </li>
  )
}
