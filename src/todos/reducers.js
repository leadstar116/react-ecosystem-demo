import {
    CREATE_TODO,
    REMOVE_TODO,
    MARKAS_COMPLETED,
    LOAD_TODOS_FAILURE,
    LOAD_TODOS_IN_PROGRESS,
    LOAD_TODOS_SUCCESS,
} from './actions'

export const isLoading = (state = false, action) => {
    const { type } = action
    switch (type) {
        case LOAD_TODOS_IN_PROGRESS:
            return true;
        case LOAD_TODOS_SUCCESS:
        case LOAD_TODOS_FAILURE:
            return false;
        default:
            return state;
    }
}

export const todos = (state = [], action) => {
    const { type, payload } = action

    switch (type) {
        case CREATE_TODO: {
            const { todo } = payload
            return state.concat(todo)
        }
        case REMOVE_TODO: {
            const { todo: todoToRemove } = payload
            return state.filter((todo) => todo.id !== todoToRemove.id)
        }
        case MARKAS_COMPLETED: {
            const { todo: todoCompleted } = payload
            return state.map((todo) => {
                if(todo.id === todoCompleted.id) {
                    return todoCompleted
                }
                return todo
            })
        }
        case LOAD_TODOS_SUCCESS:{
            const { todos } = payload
            return todos
        }
        case LOAD_TODOS_FAILURE:
        case LOAD_TODOS_IN_PROGRESS:
        default:
            break;
    }

    return state
}