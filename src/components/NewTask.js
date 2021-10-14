import React from 'react';

export default function NewTask({newTask, allTasks, handleChange, handleSubmit}){

    const handleKey = (e)=> {
        if(e.keyCode === 13 || e.keyCode === 107) handleSubmit();
    }
    const msg = allTasks.length > 0 ? "" : "Add Tags";
    
    return(
        <div>
            <input 
             name="mytag" autoComplete="off"
             placeholder={msg} value={newTask.mytag || ""} 
             onKeyDown={handleKey} onChange={handleChange}
            />
        </div>
    );
}