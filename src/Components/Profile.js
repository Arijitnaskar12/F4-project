import React, { useContext, useEffect, useState } from 'react'
import Context from '../Context/Context'

function Profile() {
    let{fetchData,setFetchData}=useContext(Context);
    let[output,setOutput]=useState("");
    useEffect(()=>{
        try{
        async function fetching(){
            
            let response=await fetch(`https://dummyjson.com/users/${fetchData.id}`)
            let data=await response.json();
            setOutput(data);
            }
            fetching();
        }
        catch(error){alert(error.message)};
       
    },[]);
    
  return (
    <div>
            {
                output &&
                (
                    <div>
                    <div className='details'>
                    <img src={output.image} alt="image"/>
                  
                    <h2>First Name:{output.firstName}</h2>
                    <h2>Last Name:{output.lastName}</h2>
                    <h2>Age:{output.age}</h2>
                    <h2>Phone Number:{output.phone}</h2>
                    <h2>Username:{output.username}</h2>
                    <h2>Email:{output.email}</h2>
                    <h2>Password:{output.password}</h2>
                    </div>
                    </div>
                )
            }

    </div>
  )
}

export default Profile;