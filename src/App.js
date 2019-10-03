import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';


function App() {
  const [todosList, setTodosList] = useState([
    { id: 1, todo: 'use hooks', done: false },
    { id: 2, todo: 'hooks are awesome', done: false },
    { id: 3, todo: 'hooks are fun', done: false }
  ]);

  return (
    <div className="App">
      <Container >
        <Row>
          {todosList.map((todo, index) => (
            <Col sm='12' md='6' lg='4'>
              <Todo key={todo.id} index={index} todo={todo} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default App;
