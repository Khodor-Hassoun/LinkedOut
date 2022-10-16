import logo from './logo.svg';
import './App.css';
import Button from './components/Button'
import Input from './components/Input';
import SignIn from './components/SignIn';
// import {baseURL, authRoutes, usersRoutes, companiesRoutes} from './apis/statics'


function App() {
  function clickedMe(){
    console.log('clicked')
  }

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <Input label = {'name'} type={'text'} name={'hello'} /> */}
        <SignIn />
        {/* <Button text= {'Sign in'} onClick = {clickedMe}/> */}
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
