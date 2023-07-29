import React from 'react';
import Login from './Components/Login';
import {Routes,Route} from "react-router-dom";
import Profile from './Components/Profile';
const App=() =>{
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
      </Routes>
    </div>
  )
}
export default App;