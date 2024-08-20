import React, {useState} from 'react'
import "./login_page.css"


const Login_Page = () => {
    
        const[user,setUser]= useState({
            email:"",
            password:""
            
        })
        const handleChange= e =>{
           
            const{name,value}=e.target
            setUser({
                ...user,[name]:value
            })
        }

  return (
    <div className='login_pa'>
        {    console.log(user) }
      <h1>Login</h1>
      <input type="Email" name="email" value={user.email} placeholder='Email' onChange={handleChange}></input>
      <input type="Password" name="password" value={user.password} placeholder='Password'onChange={handleChange}></input>
      <div><a href='#'>Forget Password?</a></div>
      <a href='#'><div className='button_a'> Login</div></a>
      <div>Already have an account?<a href='#'>Signup</a></div>
      <div>Or</div>
      <div className='button_b'>Login with Facebook</div>
      <div className='button_c'>Login with Google</div>
    </div>
  )
}

export default Login_Page

