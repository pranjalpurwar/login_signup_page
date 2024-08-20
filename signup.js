import React, {useState} from 'react'
import "./signup.css"

const Signup = () => {
    const[user,setUser]= useState({
        email:"",
        password:"",
        repassword:""
    })
    const handleChange=e =>{
       
        const{name,value}=e.target
        setUser({
            ...user,[name]:value
        })
    }
  return (
    <div className='sign'>
        {console.log("User",user)}
      <h1>Signup</h1>
      <input type="Email" name="email" value={user.email} placeholder='Email'onChange={handleChange}></input>
      <input type="password" name="password" value={user.password} placeholder='Create Password'onChange={handleChange}></input>
      <input type="password" name="repassword" value={user.repassword} placeholder='Confirm Password'onChange={handleChange}></input>
      <div className='button_a'> Signup</div>
      <div>Already have an account?<a href='component\login_page\login_page.js'>Login</a></div>
      <div>Or</div>
      <div className='button_b'><i class='bx bxl-facebook facebook-icon'></i>Login with Facebook</div>
      <div className='button_c'>Login with Google</div>
    </div>
  )
}

export default Signup
