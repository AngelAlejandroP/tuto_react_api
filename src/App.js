import './App.css';
import {useState, useEffect} from 'react';

function App() {
  const url= 'https://jsonplaceholder.typicode.com/todos'
  const [todos, setTodos] = useState();

  const fetchApi = async () => {
    const response = await fetch(url)
    const responseJSON = await response.json()
    setTodos(responseJSON)
  }

  useEffect(() => {
    fetchApi()
  }, [])

  return (
    <div className="App">
      Hola mundo
      <ul>
        {!todos ? 'Cargando' : 
          todos.map((todo, index) => {
           return <li key={index}>{todo.title} {todo.completed ? 'V' : 'X'}</li>
          })
        }
      </ul>
    </div>
  );
}

export default App;
