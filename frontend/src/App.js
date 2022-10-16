import logo from './logo.svg';
import './App.css';
import Button from './components/Button'

function App() {
  function clickedMe(){
    console.log('clicked')
  }

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Button text= {'Sign in'} onClick = {clickedMe}/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link test-3xl underline font-extrabold"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
