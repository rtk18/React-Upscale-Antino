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
      <h1>Todo List Component</h1>

      <h1>Todo List</h1>
      <div style={{ overflowX: 'auto' }}>
        <table className="todo-table">
          <thead>
            <tr>
              <th style={tableHeaderStyles}>S.No</th>
              <th style={tableHeaderStyles}>Name</th>
              <th style={tableHeaderStyles}>Action</th>
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
                      <button onClick={handleAddTodo} style={saveButtonStyles}>
                        Save
                      </button>
                      <button onClick={() => setEditingIndex(-1)} style={cancelButtonStyles}>
                        Cancel
                      </button>
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      <button onClick={() => handleEditTodo(index)} style={editButtonStyles}>
                        Edit
                      </button>
                      <button onClick={() => handleRemoveTodo(index)} style={removeButtonStyles}>
                        Remove
                      </button>
                    </React.Fragment>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="add-todo" style={addTodoContainerStyles}>
        <input
          type="text"
          value={newTodo}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Enter a new Todo"
          style={inputStyles}
        />
        <button onClick={handleAddTodo} style={addTodoButtonStyles}>
          {editingIndex === -1 ? 'Add Todo' : 'Save Todo'}
        </button>
      </div>
    </div>
  );
};

const tableHeaderStyles = {
  backgroundColor: '#0099CC',
  color: '#fff',
  padding: '0.5rem',
  textAlign: 'center',
};

const inputStyles = {
  width: '100%',
  padding: '0.5rem',
  borderRadius: '4px',
  border: '1px solid #ccc',
};

const addTodoButtonStyles = {
  padding: '0.25rem 0.5rem',
  borderRadius: '4px',
  color: '#fff',
  border: 'none',
  cursor: 'pointer',
  backgroundColor: '#0099CC',
};

const saveButtonStyles = {
  padding: '0.25rem 0.5rem',
  borderRadius: '4px',
  color: '#fff',
  border: 'none',
  cursor: 'pointer',
  backgroundColor: '#0099CC',
  marginRight: '0.5rem',
};

const cancelButtonStyles = {
  padding: '0.25rem 0.5rem',
  borderRadius: '4px',
  color: '#fff',
  border: 'none',
  cursor: 'pointer',
  backgroundColor: '#FF6347',
  marginRight: '0.5rem',
};

const removeButtonStyles = {
  padding: '0.25rem 0.5rem',
  borderRadius: '4px',
  color: '#fff',
  border: 'none',
  cursor: 'pointer',
  backgroundColor: '#FF6347',
  marginRight: '0.5rem',
};

const editButtonStyles = {
  padding: '0.25rem 0.5rem',
  borderRadius: '4px',
  color: '#fff',
  border: 'none',
  cursor: 'pointer',
  backgroundColor: '#0099CC',
  marginRight: '0.5rem',
};

const addTodoContainerStyles = {
  marginTop: '1rem',
  display: 'flex',
  alignItems: 'center',
};

export default TodoList;
