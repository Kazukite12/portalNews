import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Body from './components/body'
import Navigation from './components/navgitaion';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/login';
import Dashboard from './components/Dashboard';
import ListPost from './components/list-post';
import AddPost from './components/add-post';
import DetailPage from './components/detail-page';
import ProtectedRoute from './components/protected-route'
import { Cookies, useCookies } from 'react-cookie';

function App() {

  const [auth, setAuth] = useState (false)


  useEffect(()=>{
    (
      async ()=> {
        try {

          const response = await fetch("https://zacky-news.up.railway.app/api/user/validate",{
          headers:{'Content-Type':'application/json'},
          credentials:'include',
        });
    


        if (response.status ==200) {
          setAuth(true)
        }else {
          setAuth(false)
        }
        }catch (error) {
          console.log("error",error)
          setAuth(false);
        }
      }
    )();
  });

  console.log(auth)



  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Body/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Dashboard' element={<ProtectedRoute auth={auth} >
            <Dashboard/>
          </ProtectedRoute>}>
            
          <Route path={"manager"} element={<ListPost/>} />
          <Route path={"add-post"} element={<AddPost/>} />
        </Route>
        <Route path='/detail/:id' element={<DetailPage/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
