import { loadTodosFailure, loadTodosInProgress, loadTodosSuccess, createTodo } from './actions'

export const loadTodos = () => async (dispatch, getState) => {
    try {
        dispatch(loadTodosInProgress())
        const response = await fetch('http://localhost:8080/todos')
        const todos = await response.json()
        console.log(todos)
        dispatch(loadTodosSuccess(todos))
    } catch(e) {
        dispatch(loadTodosFailure())
        dispatch(displayAlert(e))
    }
}

export const addTodoRequest = (text) => async (dispatch, getState) => {
    try {
        const body = JSON.stringify({ text })
        const response = await fetch('http://localhost:8080/todos', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'post',
            body: body
        })
        const todo = await response.json()
        dispatch(createTodo(todo))
    } catch (e) {
        dispatch(displayAlert(e))
    }
}

export const displayAlert = (text) => () => {
    alert(text)
}