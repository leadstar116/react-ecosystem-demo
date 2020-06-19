import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import TodoListItem from './TodoListItem'
import NewTodoForm from './NewTodoForm'
import { loadTodos, removeTodoRequest, completedTodoRequest } from './thunks'
import { getTodosLoading, getCompletedTodos, getIncompleteTodos } from './selectors';

const ListWrapper = styled.div`
    max-width: 700px;
    margin: auto;
`

const TodoList = ({completedTodos = [], inCompletedTodos=[], isLoading, onRemovePressed, onMarkAsCompletedPressed, startLoadingTodos}) => {
    useEffect(() => {
        startLoadingTodos()
    }, [])

    const loadingMessage = <div>Loading todos...</div>
    const content = (
        <ListWrapper>
            <NewTodoForm />
            <h3>Incomplete:</h3>
            {
                inCompletedTodos.map(todo =>
                    <TodoListItem
                        todo={todo}
                        onRemovePressed={onRemovePressed}
                        onMarkAsCompletedPressed={onMarkAsCompletedPressed}
                    />)
            }
            <h3>Completed:</h3>
            {
                completedTodos.map(todo =>
                    <TodoListItem
                        todo={todo}
                        onRemovePressed={onRemovePressed}
                        onMarkAsCompletedPressed={onMarkAsCompletedPressed}
                    />)
            }
        </ListWrapper>
    )
    return isLoading ? loadingMessage : content
}

const mapStateToProps = (state) => ({
    isLoading: getTodosLoading(state),
    completedTodos: getCompletedTodos(state),
    inCompletedTodos: getIncompleteTodos(state),
})

const mapDispatchToProps = (dispatch) => ({
    startLoadingTodos: () => dispatch(loadTodos()),
    onRemovePressed: (id) => dispatch(removeTodoRequest(id)),
    onMarkAsCompletedPressed: (id) => dispatch(completedTodoRequest(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)