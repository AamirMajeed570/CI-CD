import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);

  const fetchTasks = async () => {
    try {
      const res = await fetch(`http://localhost:3000/api/v1/task`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const result = await res.json();
      console.log("Tasks:", result.data);
      setData(result.data);
    } catch (err) {
      console.log("Fetch error:", err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {data.map((item) => (
          <li key={item._id}>{item.task}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
