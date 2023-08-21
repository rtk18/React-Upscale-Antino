import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import './ToDoList.css';
import Counter from './components/counter';
import Form from './components/form';
import HelloWorld from './components/helloWorld';
import ImageComponent from './components/imageComponent';
import TodoList from './components/toDoList';
import ToggleButton from './components/toggleButton';
import UserDetails from './components/user.js';
import Stopwatch from './components/stopWatch';
import Form2 from './components/form2';
import TableComponent from './components/apiResp';
// import Cube from "./Cube"

function App() {
  const users = [1, 2, 3, 4, 5];

  return (
    <div className="App" style={appStyles}>
      <header className="App-header" style={headerStyles}>
        Header
      </header>
      <nav style={navStyles}>
        <ul style={ulStyles}>
          <li style={liStyles}>
            <Link to="/" style={linkStyles}>HelloWorld</Link>
          </li>
          <li style={liStyles}>
            <Link to="/counter" style={linkStyles}>Counter</Link>
          </li>
          <li style={liStyles}>
            <Link to="/toggle" style={linkStyles}>ToggleButton</Link>
          </li>
          <li style={liStyles}>
            <Link to="/form" style={linkStyles}>Form</Link>
          </li>
          <li style={liStyles}>
            <Link to="/form2" style={linkStyles}>Form2</Link>
          </li>
          <li style={liStyles}>
            <Link to="/image" style={linkStyles}>ImageComponent</Link>
          </li>
          <li style={liStyles}>
            <Link to="/todo" style={linkStyles}>TodoList</Link>
          </li>
          <li style={liStyles}>
            <Link to="/stopwatch" style={linkStyles}>StopWatch</Link>
          </li>
          <li style={liStyles}>
            <Link to="/api" style={linkStyles}>API</Link>
          </li>
        </ul>
      </nav>

      <div className="mx-20 flex gap-5 my-24">
        {
          users.map((user) => {
            return (
              <Link key={user} to={`/users/${user}`} style={userLinkStyles}>User {user}</Link>
            )
          })
        }
      </div>

      <Routes>
        <Route path="/" element={<HelloWorld />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/toggle" element={<ToggleButton />} />
        <Route path="/form" element={<Form />} />
        <Route path="/image" element={<ImageComponent />} />
        <Route path="/todo" element={<TodoList />} />
        <Route path="/users/:userId" element={<UserDetails />} />
        <Route path="/stopwatch" element={<Stopwatch />} />
        <Route path="/form2" element={<Form2 />} />
        <Route path="/api" element={<TableComponent />} />
      </Routes>
      {/* <div>
        <Cube/>
    </div> */}

    </div>

  );
}

const appStyles = {
  fontFamily: 'Arial, sans-serif',
  backgroundColor: '#f0f8ff',
  color: '#333',
  minHeight: '100vh',
  padding: '1rem',
};

const headerStyles = {
  fontSize: '2rem',
  fontWeight: 'bold',
  marginBottom: '1rem',
  color: '#0099cc',
};

const navStyles = {
  marginBottom: '1rem',
};

const ulStyles = {
  listStyle: 'none',
  padding: 0,
  display: 'flex',
  justifyContent: 'center',
};

const liStyles = {
  margin: '0 0.5rem',
};

const linkStyles = {
  textDecoration: 'none',
  color: '#0099cc',
  fontWeight: 'bold',
};

const userLinkStyles = {
  textDecoration: 'none',
  color: '#0099cc',
  fontWeight: 'bold',
  display: 'block',
};



export default App;
