const initialState = {
    todos: []
  };

const addToDoReducer = (state = initialState.todos, action) => {
  console.log('inside reducer');
  console.log(state);

  switch(action.type) {
    case 'ADD_TODO':
      console.log('inside if reducer in reducer')
      console.log(action);
      console.log(state);

      console.log(action.payload);
      return [
        ...state,
        action.payload
      ];

      case 'DELETE_TODO':
        console.log(action.payload);
        const delID = action.payload.id
        const newState = state.filter(state => state.id !== delID);
        return newState;

    default:
      return state;

  }
}




export default addToDoReducer
