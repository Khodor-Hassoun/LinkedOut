import Button from "./Button";
import { useState } from "react";
import { json } from "react-router-dom";
import { stringify } from "postcss";
import axios from "axios";


function SignIn(){
    const [input, setInput] = useState({email:'', password:''})
    function logIn(){
        // console.log(JSON.stringify(input))
        axios.post('http://localhost:4000/auth/login', input)
        .then(res =>{
            console.log(res.data.person)
            localStorage.setItem('token', res.data.token)
            if(res.data.person.name){
                localStorage.setItem('type', 'company')
            }else{
                localStorage.setItem('type', 'user')
            }
            localStorage.setItem('id', res.data.person._id)

        })
        .catch(err=>{
            console.log(err)
        })
    }

    return(
        <div className="flex flex-col items-start m-1 p-20 bg-pink-50">
            <label htmlFor="input">Email</label>
            <input type="text" name="input" id="input" className="my-1 rounded-sm p-1 " onChange={(e) =>setInput({...input, email: e.target.value})}/>
            <label htmlFor="password">Password</label>
            <input type="password" name="input" id="password" className="my-1 rounded-sm p-1 " onChange={(e) =>setInput({...input, password: e.target.value})}/>
            {/* <Button text={'Log in'} onClick={e=>logIn()}/> */}
            <button onClick={logIn} className="rounded-lg p-2 text-base bg-green-200 text-black hover:bg-green-400 my-2 w-full">logIn</button>
        </div>
    )
}

export default SignIn