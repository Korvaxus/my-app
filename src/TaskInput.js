import React, { useState } from 'react';

function TaskInput({ addTask }) {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task);
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-input-form">
      <input 
        type="text" 
        value={task} 
        onChange={(e) => setTask(e.target.value)} 
        placeholder="Enter a new task" 
        className="task-input"
      />
      <button type="submit" className="add-task-button">Add Task</button>
    </form>
  );
}

export default TaskInput;
