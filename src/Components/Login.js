import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Context from '../Context/Context';
const Login=()=>{
    let[user,setUser]=useState({name:"",password:""});
    let{fetchData,setFetchData}=useContext(Context);
    let navigate=useNavigate();
    function submission(e){
        e.preventDefault();
        try{
            fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  
                  username: `${user.name}`,
                  password: `${user.password}`,
                })
              })
              .then(res => res.json())
              .then((data)=>{
                setFetchData(data);
                if(data.message!=="Invalid credentials")
                {
                    navigate("/profile");
                }else{
                    alert(data.message);
                }  
               }).catch((error)=>console.log("error",error));
               
        }
        catch(error){
            console.log("error",error);
        }
    }
  return (
    <div className='main-container'>
    <div className='container'>
        <p>Welcome back! 👋</p>
        <h2>Sign in to your account</h2>
        <form onSubmit={submission}>
            <label htmlFor="email">Your email</label>
            <input type='text' onChange={(e)=>setUser({...user,name:e.target.value})}/>
            <label htmlFor="password">Password</label>
            <input type='password'  onChange={(e)=>setUser({...user,password:e.target.value})}/>
            <button type='submit'>Continue</button>
            <a href="#">Forget your password?</a>
        </form>
        <p style={{textAlign:'center',margin:"30px"}}>Don’t have an account? <a href="#" style={{display:'inline'}}>Sign up</a></p>
    </div>
    </div>
    
  )
}

export default Login;