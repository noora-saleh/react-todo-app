import { useState } from 'react';
import './List.css';

function List() {
  const [inputValue, setInputValue] = useState('');
  const [taskList, setTaskList] = useState([]);

  const handelsubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;

    const newTask = { id: Date.now(), text: inputValue, completed: false };

    setTaskList([...taskList, newTask]);
    setInputValue('');
  };

  const toggleTask = (id) => {
    setTaskList(
      taskList.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

 
  const deleteTask = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  return (
    <div className="todo-container">
      <h2 className="todo-title">قائمة المهام</h2>

      <form className="todo-form" onSubmit={handelsubmit}>
          <button type="submit" className="add-btn"> إضافة </button>
        <input
          type="text"
          className="todo-input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="...ادخل مهمة جديدة"
        />
      </form>
      {taskList.length === 0 ?
      (<p className="no-tasks">لا توجد مهام بعد</p>) : (
      <ul className="todo-list">
        {taskList.map((task) => (
          <li key={task.id}  className={`todo-item ${task.completed ? 'completed' : ''}`} >

             <button type="button" className="delete-btn" onClick={() => deleteTask(task.id)}  >  حذف  </button>
             
            <div className="task-content">
              <span className="task-text" >
                {task.text}
              </span>
              <input type="checkbox" className="task-checkbox" checked={task.completed} onChange={() => toggleTask(task.id)} />
            </div>
          </li>
        ))}
      </ul>
      ) }
    </div>
  );
}

export default List;