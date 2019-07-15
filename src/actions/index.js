const nextId = 3;

const todo = {
  id: nextId,
  description: "add new todo"
}

//Add todo
export const addTODO = todo => {
  return{
    type: 'ADD_TODO',
    payload: todo
  };
};
