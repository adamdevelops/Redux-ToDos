const nextId = 3;

//Add todo
export const addTODO = todo => {
  return{
    type: 'ADD_TODO',
    todo: {id: nextId, todo: todo}
  };
};
