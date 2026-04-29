import { useState, useEffect } from "react"
import ToDoList from "./components/ToDoList"
import './App.css'

function App() {

  const [tasks, setTasks] = useState([])
  const [inputValue, setInputValue] = useState("")

  useEffect(() => {
    fetch("http://localhost:3001/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data))
  }, [])

  async function handleAdd() {
    const trimmed = inputValue.trim()
    if (!trimmed) return
    const response = await fetch("http://localhost:3001/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: trimmed })
    })
    const newTask = await response.json()
    setTasks([...tasks, newTask])
    setInputValue("")
  }

  async function deleteTask(id) {
    await fetch(`http://localhost:3001/tasks/${id}`, {
      method: "DELETE"
    })
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <>
      <ToDoList
        tasks={tasks}
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleAdd={handleAdd}
        deleteTask={deleteTask}
      />
    </>
  )

}

export default App
