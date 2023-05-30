import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './components/Signup'
import Signin from './components/Signin'
import Users from './components/users'
import Home from './components/Home'
import PrivateRoute from "./components/PrivateRoute";
import Header from './components/Header'
function App() {

  return (
    <div>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="*" element={<>Not Found</>} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App