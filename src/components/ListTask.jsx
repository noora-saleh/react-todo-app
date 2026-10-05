import { useReducer, useState, useEffect, useRef, useContext } from 'react';
import { taskReducer, getInitialTasks } from './taskReducer';
import { ThemeContext } from './ThemeContext'; 
import './List.css';

export default function ListTask() {
  const { theme } = useContext(ThemeContext);

  const [tasks, dispatch] = useReducer(taskReducer, [], getInitialTasks);
  const [taskText, setTaskText] = useState('');

  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus(); 
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('app-tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!taskText.trim()) return;

    dispatch({ type: 'ADD_TASK', payload: taskText });
    setTaskText('');
  };

  return (
    <div className={`todo-container ${theme}`}>
      <h2 className="todo-title">قائمة المهام المتقدمة</h2>

      <form onSubmit={handleAddTask} className="todo-form">
        <input
          ref={inputRef} 
          type="text"
          className="todo-input"
          placeholder="أدخل مهمة جديدة..."
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
        <button type="submit" className="add-btn">إضافة</button>
      </form>

      <ul className="todo-list">
        {tasks.length === 0 ? (
          <p className="no-tasks">لا توجد مهام حالياً</p>
        ) : (
          tasks.map((task) => (
            <li key={task.id} className={`todo-item ${task.completed ? 'completed' : ''}`}>
              <button
                className="delete-btn"
                onClick={() => dispatch({ type: 'DELETE_TASK', payload: task.id })}
              >
                حذف
              </button>
              
              <div className="task-content">
                <span className="task-text">{task.text}</span>
                <input
                  type="checkbox"
                  className="task-checkbox"
                  checked={task.completed}
                  onChange={() => dispatch({ type: 'TOGGLE_TASK', payload: task.id })}
                />
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}