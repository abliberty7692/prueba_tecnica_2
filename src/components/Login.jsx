import React from "react";
import "./Login.css";
import userimg from "../assets/profile.png";
export default class Login extends React.Component {
    render() {
        return <div className="Login">
            <img src={userimg} className="user-photo" alt="The User"/>
            <form>
                <input className="input-box" type="text" name="username" id="username-input" placeholder="Usuario"/>
                <input className="input-box" type="text" name="password" id="password-input" placeholder="Password"/>
                <button className="button button-blue" type="submit">Ingresar</button>
            </form>
            <a href="localhost:3000" className="link link-blue">Crear Cuenta</a>
        </div>
    }
}
