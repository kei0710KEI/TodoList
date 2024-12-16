import React, { useState, useEffect } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [deadline, setDeadline] = useState('');
  const [priority, setPriority] = useState('low');
  const [filter, setFilter] = useState('all');
  const [theme, setTheme] = useState('light');

  // タスク追加
  const addTask = () => {
    if (newTask.trim() === '') return;
    setTasks([...tasks, { text: newTask, completed: false, deadline, priority }]);
    setNewTask('');
    setDeadline('');
    setPriority('low');
  };

  // タスク削除
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  // 完了状態の切り替え
  const toggleComplete = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  // タスク編集
  const editTask = (index, newText) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, text: newText } : task
    );
    setTasks(updatedTasks);
  };

  // フィルタリング
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.completed;
    if (filter === 'incomplete') return !task.completed;
    return true;
  });

  // テーマ切り替え
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // ローカルストレージに保存
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div
      style={{
        backgroundColor: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
        minHeight: '100vh',
        padding: '20px',
      }}
    >
      <button onClick={toggleTheme} style={{ marginBottom: '20px' }}>
        {theme === 'light' ? 'ダークモード' : 'ライトモード'}
      </button>
      <h1>TODOリスト</h1>
      <TaskInput
        newTask={newTask}
        setNewTask={setNewTask}
        addTask={addTask}
        deadline={deadline}
        setDeadline={setDeadline}
        priority={priority}
        setPriority={setPriority}
      />
      <div style={{ marginBottom: '20px' }}>
        <button onClick={() => setFilter('all')} style={{ marginRight: '10px' }}>全て</button>
        <button onClick={() => setFilter('completed')} style={{ marginRight: '10px' }}>完了済み</button>
        <button onClick={() => setFilter('incomplete')}>未完了</button>
      </div>
      <TaskList
        tasks={filteredTasks}
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    </div>
  );
}

export default App;
