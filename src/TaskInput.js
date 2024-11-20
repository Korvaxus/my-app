import React, { useState } from 'react';

function TaskInput({ addTask }) {
  // State to hold the value of the current input
  const [task, setTask] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    if (task.trim()) { // Only add the task if it's not empty
      addTask(task); // Add the task
      setTask(''); // Reset the input field
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
