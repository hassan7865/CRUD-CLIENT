import React from 'react'
import Home from './Pages/Home'
import Login from './Pages/Login'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Detailuser from './Pages/Detailuser'
import AddUser from './Pages/AddUser';
import Register from './Pages/Register';
import { useSelector } from 'react-redux';
import Find from './Pages/Find';

const App = () => {
  const user = useSelector((state)=>state?.currentuser)
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={user ? <Home/>:<Navigate to="/login" replace></Navigate>}/>
        <Route path='detailuser/:id' element={ user? <Detailuser/> : <Navigate to='/login'></Navigate>}/>
      </Route>
      <Route path='/login' element={user ? <Navigate to='/' replace></Navigate>:<Login/>}></Route>
      <Route path='/adduser' element={user ? <AddUser/>:<Navigate to='/login'></Navigate>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path='/find' element={user ? <Find/>:<Navigate to='/login'></Navigate>}></Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App