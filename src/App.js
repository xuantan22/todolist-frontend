import { addToDo, getAllToDo,updateToDo, deleteToDo} from './utils/CallApi';
import './App.css';
import ToDo from './components/ToDo';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [toDo, setToDo] = useState([]);
  const [text, setText] = useState("");
  const [isUpdating, setIsUpdating] =useState(false);
  const [toDoId, setToDoId] = useState("");
  useEffect(() => {
    getAllToDo(setToDo)
  },[])

  const  update=(_id, text)=>{
    setIsUpdating(true);
    setText(text);
    setToDoId(_id);
  }
 const notifyAdded = () => toast.success(" todo is added successful!");
 const notyfyUpdated = () => toast.success("Todo is updated successful!");
 const notifyDeleted = () => toast.error("Todo is deleted successful!");


  return (
    <div className="App">
      <div className="container">
          <h1>XT-ToDoList</h1>
          <div className="topic">
            <input type="text" 
            placeholder="enter todo..."
            value={text}
            onChange={(e)=> setText(e.target.value)} />
            <button className="btnAdd" 
              onClick={isUpdating ? ()=>updateToDo(toDoId, text, setToDo, setText, setIsUpdating,notyfyUpdated) 
              : ()=>addToDo(text, setText, setToDo,notifyAdded)}>
              {isUpdating ? "Update":"Add"}
            </button>
            <ToastContainer  />

          </div>
          <div className='list'>
            {
              toDo.map((item)=><ToDo key={item._id} 
              text={item.text} 
              updateToDo={()=>update(item._id, item.text)}
              deleteToDo={()=>deleteToDo(item._id, setToDo,notifyDeleted)} 
              />)}

          </div>
      </div>
    </div>
  );
}

export default App;
