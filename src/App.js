// import Cube from './Cube';
// import logo from './logo.svg';
import './App.css';
import Counter from './components/counter';
// import Form from './components/form';
import HelloWorld from './components/helloWorld';

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
        {/* <h1>Form Component</h1>
        <Form /> */}
      </div>
    </div>
  );
}

export default App;
