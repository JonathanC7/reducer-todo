export const initialState =  {
        todos : [
            
        ]
}

export const todoReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return {
                todos: [...state.todos, {item : action.newTodo, completed:false, id:Math.random()}]
            };
        case 'TOGGLE_COMPLETE':
            return {
                todos: state.todos.map(todo => {
                    if(todo.id === action.payload){
                        return{
                            ...todo, 
                            completed: !todo.completed
                        }
                    }
                    return todo;
                })
            };
        case 'CLEAR_PURCHASED':
            return {
                todos: state.todos.filter(todo => {
                    return !todo.completed
                })
            }
        default: return state;
    }
}