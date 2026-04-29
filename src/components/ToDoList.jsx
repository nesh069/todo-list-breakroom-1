import { useState } from "react";

function ToDoList() {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAdd = () => {
    const trimmed = inputValue.trim();
    if (!trimmed) return; // stops blank tasks from being added
    setInputValue("");
    setTasks((tasks) => [
      ...tasks,
      {
        id: tasks.length + 1,
        name: trimmed,
      },
    ]);
  };

  const deleteTask = (id) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      <h1>To Do List</h1>
      <input
        value={inputValue}
        type='text'
        placeholder='Enter Task'
        onChange={(e) => setInputValue(e.target.value)}
      ></input>
      <button onClick={handleAdd}>Add</button>
      <h3>Current Tasks</h3>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <p>{task.name}</p>
            <button onClick={() => deleteTask(task.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
