let nextId = 0;

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
