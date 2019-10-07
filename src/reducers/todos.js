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
      console.log('inside delete case');
      console.log(action.payload);
      const delID = action.payload.id;
      const newState = state.filter(state => state.id !== delID);

      return newState;

      case 'EDIT_TODO':
        console.log('inside edit case');
        console.log(action.payload);
        const editID = action.payload.id;

        return state.map((todo, index) => {
          if (index !== editID){
            // Do not edit item
            return todo
          }

          // Otherwise, update todo
          return {
            ...todo,
            ...action.payload
          }

        })

    default:
      return state;

  }
}


export default addToDoReducer
