import React from 'react';
import cross from '../cross.svg';

export default function TaskList({styles, allTasks, handleDelete}){
    return(
        <div className="ul">
            {allTasks.map(({mytag, id})=>(
                <div style={styles} className="li">
                    <p>{mytag}</p>
                    <img src={cross} 
                    onClick={()=>handleDelete(id)}/>
                </div>
            ))}
        </div>
    );
}