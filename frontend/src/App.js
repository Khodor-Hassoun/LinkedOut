import logo from './logo.svg';
import './App.css';
import Button from './components/Button'
import Input from './components/Input';
import SignIn from './components/SignIn';
import LogInPage from './pages/loginpage';
import CompanyPage from './pages/company/companyPage';
import UserPage from './pages/user/userPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";  

// import {baseURL, authRoutes, usersRoutes, companiesRoutes} from './apis/statics'


function App() {
  function clickedMe(){
    console.log('clicked')
  }
  let homePage
  if(localStorage.getItem('type') === "company") {homePage =<CompanyPage/>}
  else{homePage = <UserPage/> }

  return (
    <BrowserRouter>
      <LogInPage/>
      <Routes>
        <Route element={homePage} path='/'/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
