import { useEffect, useState } from 'react';
import './App.css';
import Header from './header/header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login/login';
import SignUp from './pages/signUp/signUp';

function App() {
  const [data , setData] = useState();
  useEffect(()=>{
    // fetch('http://localhost:3000/aaaa/ggg').then((res)=>{
    //     console.log(res);
    //     setData(res.data);
    // })
  },[])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/login"} element={<Login />}></Route>
          <Route path={"/"} element={<SignUp />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
