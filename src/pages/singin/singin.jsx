import React from "react";
import { useState } from "react";
import './singin.css'

import axios from 'axios';

export default function SingIn() {

    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      }
    
      const handleSubmit = (event) => {
        event.preventDefault();
        processLogin(inputs.username, inputs.password);
      }

   async function processLogin(username, password){
        console.log(username, password);
        const body = { email: username, password:password };
        axios.post(`http://localhost:8080/api/v1/login`,body)
        .then(res => {
            console.log(res.data['token'])
            localStorage.setItem('token', res.data['token'])
        })
    }
    

    return (
        <main className="singin-background">
          <div className="form-background">
          <div>
          <h1 className="form-title">Login</h1>
            <form onSubmit={handleSubmit}>
              <div className="form-input">
                <label>Enter your name:
                  <input 
                    type="text" 
                    name="username" 
                    value={inputs.username || ""} 
                    onChange={handleChange}
                  />
                </label>
              </div>
              <div className="form-input">
                <label>Password:
                  <input 
                    type="password" 
                    name="password" 
                    value={inputs.password || ""} 
                    onChange={handleChange}
                  />
                  </label>
              </div>
              <button className="form-submit-button" type="submit">Login</button>
          </form>
          </div>
          </div>
        </main>
      )

}