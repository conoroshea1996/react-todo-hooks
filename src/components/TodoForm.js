import React, { useState } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!value) {
            alert('To do cant be empty')
        } else {
            addTodo(value)
        }
        setValue('')
    }
    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="todoInput">Todo</Label>
                    <Input type="text" id="todoInput" placeholder="Whats there to do" value={value}
                        onChange={e => setValue(e.target.value)} />
                </FormGroup>
                <Button>Submit</Button>
            </Form>
        </div>
    )
}

export default TodoForm
