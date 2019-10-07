let nextId = 0;
let newtodo = "todo";

//Add todo
export const addTODO = todo => {

  return{
    type: 'ADD_TODO',
    payload: {
      id: nextId++,
      description: todo
    }
  };
};

export const deleteTODO = todo => {

  return{
    type: 'DELETE_TODO',
    payload: {
      id: todo,
    }
  };
};

export const editTODO = todo => {

  return{
    type: 'EDIT_TODO',
    payload: {
      id: todo.id,
      description: newtodo
    }
  };
};
