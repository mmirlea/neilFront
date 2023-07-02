import { useEffect, useState } from 'react';
import './App.css';
//import Header from './header/header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login/login';
import SignUp from './pages/signUp/signUp';
import Board from './pages/board/board';
//import { Link } from 'react-router-dom';

function App() {
  const [data , setData] = useState();
  const url = "http://localhost:3000/login";
  useEffect(()=>{
    // fetch(url, {
    //   method: "POST",
    //   header: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     storeNm: 'lee',
    //     tel: 30,
    //     email: 'green@naver.com',
    //     password: '1111',
    //     address1: '울산시 남구 삼산동',
    //     address2: '111',
    //   })
    // }).then((res) => console.log(res))
    // .then(data => {
    //   console.log(setData(data));
    // })
  },[])

  // const [content, setContent] = useState([]);

  // useEffect(() => {
  // fetch(url).then(
  //   response=>{
  //       return response.json();
  //   }
  //   ).then(data=>{
  //       setContent(data);
  //   }
  // )
  // },[])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/login"} element={<Login />}></Route>
          <Route path={"/"} element={<SignUp />}></Route>
          <Route path={"/board"} element={<Board />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
