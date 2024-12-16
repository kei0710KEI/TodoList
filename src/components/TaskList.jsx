import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, toggleComplete, deleteTask, editTask }) {
  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          index={index}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      ))}
    </ul>
  );
}

export default TaskList;

