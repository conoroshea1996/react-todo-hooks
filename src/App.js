import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';


function App() {
  const [todosList, setTodosList] = useState([
    { id: 1, todo: 'use hooks', done: true },
    { id: 2, todo: 'hooks are awesome', done: false },
    { id: 3, todo: 'hooks are fun', done: false }
  ]);

  const addTodo = (text) => {
    const newTodo = {
      id: Math.floor((Math.random() * 10) + 1),
      todo: text,
      done: false
    }
    const newTodos = [...todosList, newTodo];
    setTodosList(newTodos);
  }

  const isDone = (num) => {
    const newTodos = [...todosList];
    newTodos[num].done = !newTodos[num].done;
    setTodosList(newTodos);
  }

  return (
    <div className="App">
      <Container >
        <Row>
          {todosList.map((todo, index) => (
            <Col sm='12' md='6' lg='4'>
              <Todo key={todo.id} index={index} todo={todo} isDone={isDone} />
            </Col>
          ))}
        </Row>
        <TodoForm addTodo={addTodo} />
      </Container>
    </div>
  );
}

export default App;
