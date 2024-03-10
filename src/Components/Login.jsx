import React from 'react'

const Login = () => {
  return (
    <div className='login'>
        <div className='login-container'>
            <form>
            <input className='input' type="text" id="username" placeholder='username' name="uid"/><br/>
            <input className='input' type="password" id="password" placeholder='password' name="pass"/><br/>
            <input className='button' type="submit" value="Login"/>
            <input className='button' type="submit" value="Signup"/>
            </form>
        </div>
    </div>
  )
}

export default Login