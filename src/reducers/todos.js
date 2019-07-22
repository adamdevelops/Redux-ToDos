const intialState = {
    todos: [
      {id: 1, description: 'bake cookies'},
      {id: 2, description: 'get groceries'}
    ]
  };

const addToDoReducer = (state = intialState.todos, action) => {
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

    default:
      return state;

  }
}


  // if (action.type === 'ADD_TODO'){
  //   console.log('inside if reducer in reducer')
  //   console.log(action);
  //   console.log(state);
  //
  //   console.log(action.payload);
  //   return [
  //     ...state,
  //     action.payload
  //   ];
    // state.concat(action.payload);
//   }
//
//   return state;
// }

export default addToDoReducer
