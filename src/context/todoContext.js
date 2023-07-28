import React, { createContext, useReducer, useContext } from 'react';

const TodoContext = createContext();

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload];
    case 'EDIT_TODO':
      return state.map((todo, index) =>
        index === action.payload.index ? action.payload.todo : todo
      );
    case 'REMOVE_TODO':
      return state.filter((_, index) => index !== action.payload);
    default:
      return state;
  }
};

const TodoProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(todoReducer, []);

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

const useTodoContext = () => useContext(TodoContext);

export { TodoProvider, useTodoContext };
