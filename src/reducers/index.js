import {combineReducers} from 'redux';

const todosReducer = () => {
  return [
    {id: 1, description: 'bake cookies'},
    {id: 2, description: 'get groceries'}
  ];
};

const addToDoReducer = (state = [], action) => {
  if (action.type === 'ADD_TODO'){
    return state.todos.concat(action.payload);
  }

  return state;
}

export default combineReducers({
  todos: todosReducer,
  newtodos: addToDoReducer
})
