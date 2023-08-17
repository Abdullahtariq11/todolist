import React from "react";
import './TodoList.css';

function Todolist({ list, done,remove }) {

    return (
        <ul>
            {list.map((item, index) => (
                <li id="list" className={item.checked? "completed" :""} key={index}>{item.text + " "}
                    <span className="btn">
                        <button onClick={() => done(index)} className="btn-a">
                            Done
                        </button>
                        <button onClick={()=>remove(index)} className="btnb">
                            Delete
                        </button>

                    </span>
                </li>
            ))}
        </ul>
    );

}

export default Todolist;