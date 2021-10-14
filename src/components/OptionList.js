import React from 'react';
import {taglist} from './randomTags';

export default function OptionList({newTask, handleSubmit}){

    const name = newTask.mytag ? newTask.mytag.toLowerCase():"";

    return(
        <div id="option_list">
            {taglist.filter(item =>item.toLowerCase().indexOf(name) > -1).map((item, index) => (
                <div>
                <option className={index===0 ? "active":""} onClick={handleSubmit} value={item} key={index}>
                    {item}
                </option>
                </div>
            ))}
        </div>
    );
}