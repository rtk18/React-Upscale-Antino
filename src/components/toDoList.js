import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [editingIndex, setEditingIndex] = useState(-1);

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleAddTodo = () => {
    if (newTodo.trim() === '') return;

    if (editingIndex === -1) {
      // Adding a new todo
      setTodos([...todos, newTodo]);
    } else {
      // Updating an existing todo
      const updatedTodos = [...todos];
      updatedTodos[editingIndex] = newTodo;
      setTodos(updatedTodos);
      setEditingIndex(-1); // Reset editingIndex after updating
    }

    setNewTodo('');
  };

  const handleRemoveTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const handleEditTodo = (index) => {
    setEditingIndex(index);
    setNewTodo(todos[index]);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleAddTodo();
    }
  };

  return (
    <div className="todo-list-container">
      <h1>Todo List</h1>
      <div className="scrollable-container">
        <table className="todo-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  {editingIndex === index ? (
                    <input type="text" value={newTodo} onChange={handleInputChange} />
                  ) : (
                    todo
                  )}
                </td>
                <td className="action-buttons">
                  {editingIndex === index ? (
                    <React.Fragment>
                      <button onClick={handleAddTodo}>Save</button>
                      <button onClick={() => setEditingIndex(-1)}>Cancel</button>
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      <button onClick={() => handleEditTodo(index)}>Edit</button>
                      <button onClick={() => handleRemoveTodo(index)}>Remove</button>
                    </React.Fragment>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="add-todo">
        <input
          type="text"
          value={newTodo}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Enter a new Todo"
        />
        <button onClick={handleAddTodo}>
          {editingIndex === -1 ? 'Add Todo' : 'Save Todo'}
        </button>
      </div>
    </div>
  );
};

export default TodoList;
