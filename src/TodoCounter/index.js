import React from 'react';
import './TodoCounter.css';

function TodoCounter({ total, completed }) {
  return (
    <div>
    <h1>TODO APP</h1>
    <h2 className="TodoCounter">Has completado {completed} de {total} ToDo's</h2>

    </div>
  );
}

export { TodoCounter };
