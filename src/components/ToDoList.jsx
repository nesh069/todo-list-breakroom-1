function ToDoList({ tasks, inputValue, setInputValue, handleAdd, deleteTask }) {
  return (
    <div>
      <h1>To Do List</h1>
      <input
        value={inputValue}
        type='text'
        placeholder='Enter Task'
        onChange={(e) => setInputValue(e.target.value)}
      />
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
  )
}

export default ToDoList
