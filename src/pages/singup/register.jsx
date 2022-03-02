import React from "react";
import { useState } from "react";
import './register.css'

import axios from 'axios';

export default function Register() {

    const [registerUser, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      }
    
      const handleSubmit = (event) => {
        event.preventDefault();
        processRegister(registerUser);
      }

   async function processRegister(){
        const name = registerUser.firstName + ' ' + registerUser.lastName
        const body = { name: name, email: registerUser.email, password: registerUser.password};
        axios.post(`http://localhost:8080/api/v1/create-user`,body)
    }
    

    return (
        <main className="singin-background">
          <div className="form-background">
          <div>
          <h1 className="form-title">Login</h1>
            <form onSubmit={handleSubmit}>
            <div className="form-input">
                <label>Enter your first name:
                  <input 
                    type="text" 
                    name="firstName" 
                    value={registerUser.firstName || ""} 
                    onChange={handleChange}
                  />
                </label>
              </div>
              <div className="form-input">
                <label>Enter your last name:
                  <input 
                    type="text" 
                    name="lastName" 
                    value={registerUser.lastName || ""} 
                    onChange={handleChange}
                  />
                </label>
              </div>
            <div className="form-input">
                <label>Enter your email:
                  <input 
                    type="text" 
                    name="email" 
                    value={registerUser.email || ""} 
                    onChange={handleChange}
                  />
                </label>
              </div>
              <div className="form-input">
                <label>Password:
                  <input 
                    type="password" 
                    name="password" 
                    value={registerUser.password || ""} 
                    onChange={handleChange}
                  />
                  </label>
              </div>
              <button className="form-submit-button" type="submit">Register</button>
          </form>
          </div>
          </div>
        </main>
      )

}