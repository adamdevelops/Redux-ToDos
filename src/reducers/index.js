import {combineReducers} from 'redux';


const addToDoReducer = (state = [], action) => {
  if (action.type === 'ADD_TODO'){
    return state.todos.concat(action.payload);
  }

  return state.todos;
}

export default combineReducers({
  todos: addToDoReducer,
})
