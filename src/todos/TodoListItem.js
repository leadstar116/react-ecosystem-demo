import React from 'react'
import styled from 'styled-components'

const TodoItemContainer = styled.div`
    background: #fff;
    border-radius: 8px;
    border-bottom: ${props => (new Date(props.createdAt) > new Date(new Date().setDate(new Date().getDate()-5))
                ? 'no-border'
                : '2px solid red' )};
    margin-top: 8px;
    padding: 16px;
    position: relative;
    box-shadow: 0 4px 8px grey;
`

const ButtonsContainer = styled.div`
    position: absolute;
    right: 12px;
    bottom: 12px;
`

const Button = styled.button`
    font-size: 16px;
    padding: 8px;
    border: none;
    border-radius: 8px;
    outline: none;
    cursor: pointer;
    display: inline-block;
`

const CompletedButton = styled(Button)`
    background-color: #22ee22;
`

const RemoveButton = styled(Button)`
    background-color: #ee2222;
    margin-left: 8px;
`

const TodoListItem = ({todo, onRemovePressed, onMarkAsCompletedPressed}) => (
    <TodoItemContainer createdAt = { todo.createdAt }>
        <h3>{ todo.text }</h3>
        <p>
            Created at: &nbsp;
            { new Date(todo.createdAt).toLocaleDateString() }
        </p>
        <ButtonsContainer>
            {!todo.isCompleted &&
                <CompletedButton
                    className="completed-button"
                    onClick={ () => onMarkAsCompletedPressed(todo.id) }
                >
                    Mark As Completed
                </CompletedButton>
            }
            <RemoveButton
                className="remove-button"
                onClick={ () => onRemovePressed(todo.id) }
            >
                Remove
            </RemoveButton>
        </ButtonsContainer>
    </TodoItemContainer>
)

export default TodoListItem