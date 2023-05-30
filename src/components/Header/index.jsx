import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';

function Header() {
    const [logIn,setLogIn]=useState(false)
    const Navigate=useNavigate()
    const handerOut=()=>{
        localStorage.removeItem('token');
        Navigate("/signin")
    }
    useEffect(()=>{
       const token=localStorage.getItem('token')
       if(token) setLogIn(true)
       else setLogIn(false)
    })
  return (
    <div>
        <div>
            {logIn&&(
                <button onClick={handerOut}>Đăng Xuất</button>
            )}
        </div>
        <div>Home</div>
    </div>
  )
}

export default Header