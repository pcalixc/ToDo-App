import React from 'react';
import './TodoItem.css';

function TodoItem(props) {
  
  return (
    <li className="TodoItem">
      <span onClick={props.onComplete} className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}>
      {props.completed ? <i class="fa-solid fa-circle-check"></i>:<i class="fa-regular fa-circle-check"></i> }
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--completed'}`}>
        {props.text}
      </p>
      <span onClick={props.onDelete} className="Icon Icon-delete">
      <i class="fa-solid fa-trash"></i>
      </span>
    </li>
  );
}

export { TodoItem };
