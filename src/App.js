import React from 'react'
import styled from 'styled-components'
import { hot } from 'react-hot-loader'
import TodoList from './todos/TodoList'

const AppContainer = styled.div`
    margin: 1rem;
    font-family: Arial, Helvetica, sans-serif;
    color: #222222;
`

const App = () => {
    return (
        <AppContainer>
            <TodoList />
        </AppContainer>
    )
}

export default hot(module)(App)