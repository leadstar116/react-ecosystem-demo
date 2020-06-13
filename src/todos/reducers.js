import { CREATE_TODO, REMOTE_TODO } from './actions'

export const todos = (state = [], action) => {
    const { type, payload } = action

    switch (type) {
        case CREATE_TODO:
            const { text } = payload
            const newTodo = {
                text,
                isCompleted: false
            }
            return state.concat(newTodo)

        case REMOVE_TODO:
            const { text } = payload
            state.filter((todo) => todo.text !== text)
            break;

        default:
            break;
    }

    return state
}