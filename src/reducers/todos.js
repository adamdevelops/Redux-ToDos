const intialState = [
    {id: 1, description: 'bake cookies'},
    {id: 2, description: 'get groceries'}
];

const addToDoReducer = (state = intialState, action) => {
  console.log('inside reducer');
  console.log(state);



  if (action.type === 'ADD_TODO'){
    console.log('inside if reducer')
    console.log(action);
    console.log(state);

    console.log(action.payload);
    return state.concat(action.payload) ;
  }

  return state;
}

export default addToDoReducer
