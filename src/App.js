// import Cube from './Cube';
// import logo from './logo.svg';
import './App.css';
import './ToDoList.css'
import Counter from './components/counter';
// import DocumentTitleUpdater from './components/documentTitleUpdater';
import Form from './components/form';
// import Form from './components/form';
import HelloWorld from './components/helloWorld';
import ImageComponent from './components/imageeComponent';
import TodoList from './components/toDoList';
import ToggleButton from './components/toggleButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Header
      </header>
      < HelloWorld />
      {/* <div className='Cube'>
        <Cube />
      </div> */}
      <div>
        <h1>Counter Component</h1>
        <Counter />
        <hr />
      </div>
      <div><Form /></div>
      <div>
        <h1>Toggle Button Component</h1>
        <ToggleButton />

        <hr />

        <h1>Image Component</h1>
        <ImageComponent />

        <hr />
{/* 
        <h1>Document Title Updater Component</h1>
        <DocumentTitleUpdater /> */}

        <h1>Todo List Component</h1>
      <TodoList/>
      </div>
    </div>
  );
}

export default App;
