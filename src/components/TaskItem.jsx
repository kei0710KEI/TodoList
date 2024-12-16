import React, { useState } from 'react';

function TaskItem({ task, index, toggleComplete, deleteTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);

  const handleSave = () => {
    editTask(index, editedText);
    setIsEditing(false);
  };

  return (
    <li
      style={{
        marginBottom: '10px',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        backgroundColor: task.priority === 'high' ? '#f8d7da' : task.priority === 'medium' ? '#fff3cd' : '#d4edda',
        textDecoration: task.completed ? 'line-through' : 'none',
      }}
    >
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            style={{ marginRight: '10px' }}
          />
          <button onClick={handleSave}>保存</button>
          <button onClick={() => setIsEditing(false)}>キャンセル</button>
        </div>
      ) : (
        <div>
          <span onClick={() => toggleComplete(index)} style={{ cursor: 'pointer', marginRight: '10px' }}>
            {task.text}
          </span>
          <span>({task.deadline || '期限なし'})</span>
          <button onClick={() => setIsEditing(true)} style={{ marginLeft: '10px' }}>編集</button>
          <button onClick={() => deleteTask(index)} style={{ marginLeft: '10px' }}>削除</button>
        </div>
      )}
    </li>
  );
}

export default TaskItem;

