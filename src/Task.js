import React from 'react';

function Task({ task, deleteTask }) {
  return (
    <li>
      {task}
      <button onClick={deleteTask}>Delete</button>
    </li>
  );
}

export default Task;
