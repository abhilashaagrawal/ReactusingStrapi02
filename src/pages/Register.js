import React, { useState } from 'react'
import swal from 'sweetalert';

export default function Register() {
    //hook variables
    const[username, setUsername]=useState('Ashi');
    const[email, setEmail]=useState('ashi@gmail.com');
    const[password, setPassword]=useState('Ashi@9171');

    let sendData=()=>{
        // alert('okkk');
        console.log(username);
        console.log(email);
        console.log(password);

        let payload={
            "username":username,
            "email":email,
            "password":password
        }
        fetch(`http://localhost:1337/api/auth/local/register`,
            {
                method:"POST",
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(payload)
            }
        )
        .then((res)=>{return res.json()})
        .then((data)=>{console.log(data)
            if(data.jwt)
            {
                swal({
                    title: "Good job!",
                    text: "Register Successfully!",
                    icon: "success",
                    button: "Aww yiss!",
                  });
            }    
        })
        .catch((err)=>{console.log(err)});
        
    }
  return (
    <form className='mt-5'>
        <input type="text" name='username' id="username" placeholder='username' value={username} onChange={(e)=>{setUsername(e.target.value)}} ></input>
        <input type="email" name='Email' id="Email" placeholder='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
        <input type="password" name='Password' id="Password" placeholder='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}></input>
        <input type="button" onClick={sendData} value="submit"></input>
    </form>
  )
}
