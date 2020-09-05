import React, {useState} from 'react';
import axios from 'axios'
const Register = () => {

   const postUser = () => {
       console.log("hola")
   } 

   
    return (
        <div>
            <form onSubmit={postUser}>
                <input type="text" placeholder="name"/>
                <input type="text" placeholder="username" />
                <input type="password" placeholder="password" />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;