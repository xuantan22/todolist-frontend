import axios from 'axios';
import { toast } from 'react-toastify';

const baseUrl = "https://todolist-backend-2.onrender.com";

const getAllToDo = (setToDo) => {
    axios.get(baseUrl)
    .then(({data}) => {
        console.log("data:", data);
        if (Array.isArray(data)) {
            setToDo(data);
        } else {
            console.error("Invalid data format received from server");
        }
    })
    .catch(error => {
        console.error("Error fetching todo list:", error);
    });
};

const addToDo = (text, setText, setToDo, successCallback)=>{
    if (!text || typeof text !== 'string') {
        toast.error("you need enter todo", text);
        return;
    }
    axios.post(`${baseUrl}/create`, {text})
    .then((data)=>{
        console.log(data);
        setText("");
        getAllToDo(setToDo);
        if(successCallback){
            successCallback();
        }
    })
    .catch(error => {
        console.error("Error fetching todo list:", error);
    })
}
const updateToDo=(toDoId, text, setToDo, setText, setIsUpdating,successCallback)=>{
    if (!text || typeof text !== 'string') {
        toast.error("you need enter todo", text);
        return;
    }
    axios.post(`${baseUrl}/update`, {_id:toDoId, text})
    .then((data)=>{
        setText("");
        setIsUpdating(false);
        getAllToDo(setToDo);
        if(successCallback){
            successCallback();
        }
    })
    .catch(error => {
        console.error("Error fetching todo list:", error);
    })
}

const deleteToDo=(_id, setToDo,notifyDelete )=>{
    axios.post(`${baseUrl}/delete`, {_id})
    .then((data)=>{
        getAllToDo(setToDo);
        // window.location.reload();
        if(notifyDelete){
            notifyDelete();
        }
    })
    .catch(error => {
        console.error("Error fetching todo list:", error);
    })
}

export { getAllToDo, addToDo,updateToDo, deleteToDo};
