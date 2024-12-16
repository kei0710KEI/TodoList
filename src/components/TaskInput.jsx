import React from 'react';

function TaskInput({ newTask, setNewTask, addTask, deadline, setDeadline, priority, setPriority }) {
  return (
    <div style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="タスクを入力..."
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        style={{ marginRight: '10px' }}
      />
      <input
        type="date"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
        style={{ marginRight: '10px' }}
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)} style={{ marginRight: '10px' }}>
        <option value="low">低</option>
        <option value="medium">中</option>
        <option value="high">高</option>
      </select>
      <button onClick={addTask}>追加</button>
    </div>
  );
}

export default TaskInput;
