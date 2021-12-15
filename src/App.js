import { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [tasks, setTasks] = useState([]);

  const pendingTask = tasks.length

  return (
    <div>
      <h1>Todo List</h1>
      <p>Pending tasks: {pendingTask}</p>
      <div>
        <input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          type="text"
        />
        <button 
          onClick={() => {
          setTasks([title, ...tasks]);
          setTitle("");
        }}
        >
          Add
        </button>
      </div>
      <ul>
        {tasks.map((task) => {
          return (
            <li
              onClick={() => {
                setTasks(tasks.filter((t) => t !== task));
              }}
            >
              {task}
            </li>
          );
        })}
      </ul>
      {tasks.length > 0 ? (
        <button
          onClick={() => {
            setTasks([]);
          }}
        >
          Complete all tasks
        </button>
      ) : (
        <div />
      )}
    </div>
  );
}

export default App;
