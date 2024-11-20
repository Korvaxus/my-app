import React, { useState } from 'react';
import TaskInput from './TaskInput';
import TaskList from './TaskList';

function App() {
  // State to hold the list of tasks
  const [tasks, setTasks] = useState([]);
  // State to manage the visibility of the delete notification
  const [showNotification, setShowNotification] = useState(false);

  // Function to add a new task to the list
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  // Function to delete a task from the list by its index
  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
    // Show the notification for 2 seconds
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 2000);
  };

  return (
    <div className="App">
      {showNotification && <div className="notification">Item deleted successfully</div>}
      <h1>Task Manager</h1>
      <TaskInput addTask={addTask} /> {/* Component for adding new tasks */}
      <TaskList tasks={tasks} deleteTask={deleteTask} /> {/* Component for displaying tasks */}
    </div>
  );
}

export default App;
