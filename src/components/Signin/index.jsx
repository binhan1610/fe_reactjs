import { Modal } from "bootstrap";
import React, { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import "bootstrap/dist/css/bootstrap.min.css";
import {  json, useNavigate } from "react-router";
import "./style.css"
import axios, { AxiosHeaders } from "axios";
function Signin({getUsers}) {
  
  const { handleSubmit, register, formState:{errors} } = useForm();
  const [success,setSuccess] =useState(false)
  const Navigate=useNavigate()
  const handerGoToSignup =()=>{
    Navigate("/signup")
  }
  const handerclick = async (data)=>{
console.log(data);


await axios.post('http://localhost:3001/login',data)
.then(response => {
  console.log(response.data)
    if(response.data)
    {
      localStorage.setItem('token',response.data)
      setSuccess(true)
      Navigate("")
    }

})
.catch(error => {
  console.error(error);
});


  }
  useEffect(() => {
    if (!success) return;
    setSuccess(false);
    Navigate("/");
  }, [success]);
  return (
    <div className="signun">
  
        <form onSubmit={handleSubmit(handerclick)}>
          <div className="form-group">
            <h1>Đăng Nhập</h1>
            <label >Tài Khoản</label>
            <input
              type="text"
          
              name='username'
              {...register('username', {required:true,minLength:8,maxLength:32})}
              className={`form-control ${errors.username ? "is-invalid" : ""}`}
             
            />
            {errors.username &&errors.username.type==="required" &&(
              <div className="invalid-feedback">Không được để trống tài khoản</div>
            )}
            {errors.username&&errors.username.type==="minLength"&&
            <div className="invalid-feedback">Vui lòng nhập tài khoản có độ dài từ 8 đến 32 ký tự</div>}
            {errors.username&&errors.username.type==="maxLength"&&
            <div className="invalid-feedback">Vui lòng nhập tài khoản có độ dài từ 8 đến 32 ký tự</div>}
          </div>
          <div className="form-group">
            <label >Mật Khẩu</label>
            <input
              type="password"
          
              name='password'
              {...register('password', {required:true})}
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
             
            />
            {errors.password && errors.password.type==="required"&& (
              <div className="invalid-feedback">Không được để trống mật khẩu</div>
            )}
             {errors.password&&errors.password.type==="minLength"&&
            <div className="invalid-feedback">Vui lòng nhập tài khoản có độ dài từ 8 đến 32 ký tự</div>}
            {errors.password&&errors.password.type==="maxLength"&&
            <div className="invalid-feedback">Vui lòng nhập tài khoản có độ dài từ 8 đến 32 ký tự</div>}
                        {/* {errors.password&&errors.password.type==="pattern"&&
            <div className="invalid-feedback">Nhập đúng định dạng gồm ít nhất 1 chữ thường 1 chữ in hoa 1 ký tự đặc biệt và 1 số bất kỳ</div>} */}
          </div>
          <button type="submit" className="btn btn-primary" style={{marginTop:"10px"}}> 
          Đăng Nhập
          </button>
        </form>
        <a className="goSignUp" onClick={handerGoToSignup}>Nếu chưa có tài khoản tiến đến đăng ký</a>

      
    </div>
  );
}

export default Signin;
