import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import TodoListItem from './TodoListItem'
import NewTodoForm from './NewTodoForm'
import { loadTodos } from './thunks'
import { removeTodo, markAsCompleted } from './actions'
import './TodoList.css'
import { isLoading } from './reducers';

const TodoList = ({todos = [], isLoading, onRemovePressed, onMarkAsCompletedPressed, startLoadingTodos}) => {
    useEffect(() => {
        startLoadingTodos()
    }, [])

    const loadingMessage = <div>Loading todos...</div>
    const content = (
        <div className="list-wrapper">
            <NewTodoForm />
            {
                todos.map(todo =>
                    <TodoListItem
                        todo={todo}
                        onRemovePressed={onRemovePressed}
                        onMarkAsCompletedPressed={onMarkAsCompletedPressed}
                    />)
            }
        </div>
    )
    return isLoading ? loadingMessage : content
}

const mapStateToProps = (state) => ({
    isLoading: state.isLoading,
    todos: state.todos,
})

const mapDispatchToProps = (dispatch) => ({
    startLoadingTodos: () => dispatch(loadTodos()),
    onRemovePressed: (text) => dispatch(removeTodo(text)),
    onMarkAsCompletedPressed: (text) => dispatch(markAsCompleted(text)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)