import React, { useState } from "react";
import "./loginform.css"

const LoginForm = () =>{

    const [popupStyle,showPopup] = useState("hide")

    const popup = () => {
        showPopup("login-popup")
        setTimeout(() => showPopup("hide"),3000)
    }

    return (
        <div className="cover">
            <h1>LOGIN </h1>
            <input type="text" placeholder="USERNAME"></input>
            <input type="password" placeholder="PASSWORD"></input>

            <div className="login-btn" onClick={popup}>
                LOGIN
            </div>
            <div className={popupStyle}>
                <h2>Login Failed</h2>
                <br></br>
                <p>USERNAME OR PASSWORD INCORRECT</p>
            </div>
            
        </div>
    )
}
export default LoginForm    