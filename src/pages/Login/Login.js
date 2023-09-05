/* eslint-disable no-unused-vars */

import React from 'react';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

function Login() {
  const [isShowPassword, setIsShowPassword] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState(''); 
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const navigate = useNavigate();

  function handleShowPassword() {
    setIsShowPassword(prevState => !prevState)
  }

  const onSubmit = (data) => {
    setErrorMsg('');
    // call api login
    console.log('bodyData: ',  JSON.stringify(data))
    fetch('http://localhost:3005/api/users/login', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => {
      if(!data.isSuccess) {
        setErrorMsg(data.msg)
        return;
      }
      window.sessionStorage.setItem('accessToken', data.token);
      navigate('/')
    })
  }; // your form submit function which will invoke after successful validation


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          {...register("email", { required: true })}
        />
        {errors.username && <p>This field is required</p>}
      </div>
      <div className="form-group">
        <label htmlFor="password" className='flex justify-between items-center'>
          <span>Password</span>

          <div className='cursor-pointer' onClick={handleShowPassword}>
            {isShowPassword ? <EyeInvisibleOutlined /> : <EyeOutlined />}
          </div>
        </label>
        <input
          type={isShowPassword ? 'text' : 'password'}
          className="form-control"
          id="password"
          name="password"
          {...register("password", { required: true })}
        />
         {errors.password && <p>This field is required</p>}
      </div>

      {errorMsg && <p>{errorMsg}</p>}

      <br />
      <button type='submit' className="btn btn-primary">
        Login
      </button>
    </form>
  );
}

export default Login;

