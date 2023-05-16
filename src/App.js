import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './components/Signup'
import Signin from './components/Signin'
import Users from './components/users'
function App() {
  const [users,setUsers]=useState()
  const getUsers=(data)=>{
     setUsers(data)
  }
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='*' element={<Signin getUsers={getUsers}/>}/>
        <Route path='/users' element={<Users users={users}/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App