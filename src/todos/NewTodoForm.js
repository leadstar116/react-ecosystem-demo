import React, { useState } from 'react'
import { connect } from 'react-redux'
import './NewTodoForm.css'
import { addTodoRequest } from './thunks';

const NewTodoForm = ({ todos, onCreatePressed }) => {
    const [inputValue, setInputValue] = useState('')
    return (
        <div className="new-todo-form">
            <input
                type="text"
                className="new-todo-input"
                value={ inputValue }
                onChange={ (e) => setInputValue(e.target.value) }
            />
            <button
                className="new-todo-button"
                onClick = { () => {
                    const isDuplicatedText =
                        todos.some((todo) => todo.text === inputValue)
                    if(!isDuplicatedText) {
                        onCreatePressed(inputValue)
                        setInputValue('')
                    }
                }}
            >
                Create Todo
            </button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    todos: state.todos,
})

const mapDispatchToProps = (dispatch) => ({
    onCreatePressed: (text) => dispatch(addTodoRequest(text)),
})

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm)