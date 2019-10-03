import React, { useState } from 'react';
import './App.css';

function App() {
  const [todosList, setTodosList] = useState([
    { id: 1, todo: 'use hooks', done: false },
    { id: 2, todo: 'hooks are awesome', done: false },
    { id: 3, todo: 'hooks are fun', done: false }
  ])

  return (
    <div className="App">

    </div>
  );
}

export default App;
