import React from "react";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { RiDeleteBin6Line } from "react-icons/ri";

const ToDo =({text,updateToDo, deleteToDo }) =>{
    return(
        <div className="todo">
            <div className="content">{text}</div>
            <div className="icons">
                <HiOutlinePencilAlt className="icon"  onClick ={updateToDo}/>
                <RiDeleteBin6Line className="icon" onClick = {deleteToDo}/>
            </div>
        </div>
    )
}
export default ToDo