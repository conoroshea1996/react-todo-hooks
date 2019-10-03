import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

import Cross from '../images/cross.jpeg';
import Tick from '../images/Tick.png';

const Todo = ({ todo, index, isDone }) => {
    console.log(todo);
    return (
        <div>
            <Card>
                <CardImg style={{ height: '200px' }} top width="100%" src={todo.done ? Tick : Cross} alt="Todo-Status" />
                <CardBody style={{ textAlign: 'center' }}>
                    <CardTitle > TO-DO</CardTitle>
                    <CardText>{todo.todo}</CardText>
                    <Button block onClick={() => isDone(index)}>Done</Button>
                </CardBody>
            </Card>
        </div>
    )
}

export default Todo
