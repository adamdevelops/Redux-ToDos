import {combineReducers} from 'redux';
import addToDoReducer from './todos.js'


export default combineReducers({
  todos: addToDoReducer
})
