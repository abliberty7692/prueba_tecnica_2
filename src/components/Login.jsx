import React from "react";
import "./Login.css";
import userimg from "../assets/profile.png";
import { Navigate } from 'react-router-dom';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usuario: "",
            password: "",
            loggedIn: false
        }

        this.setUsuario = this.setUsuario.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.isLoggedIn = this.isLoggedIn.bind(this);
        this.login = this.login.bind(this);
    }

    setUsuario(e) {
        this.setState({
            usuario: e.target.value
        })
    }

    setPassword(e) {
        this.setState({
            password: e.target.value
        })
    }    

    isLoggedIn() {
        this.setState({
            loggedIn: true
        });
    }

    login(event) {
        
        event.preventDefault();
        /*console.log(event.target[0].value);
        console.log(event.target[1].value);
        console.log(this.state.usuario)
        console.log(this.state.password)*/
        let datos = {
            usuario: this.state.usuario,
            password: this.state.password
        }
        let init = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datos)
        }
        fetch("http://127.0.0.1:8081/login", init)
                .then(response=>response.json())
                .then(data=>{
                    sessionStorage.setItem("token", data.token);
                    localStorage.setItem("nombre", data.Nombre);
                    localStorage.setItem("email", data.email);
                    this.isLoggedIn();
                });
    }

    render() {
        return <div className="Login">
            <img src={userimg} className="user-photo" alt="The User"/>
            <form onSubmit={this.login}>
                <input className="input-box" type="text" name="username" id="username-input" placeholder="Usuario" onChange={this.setUsuario} value={this.state.usuario}/>
                <input className="input-box" type="password" name="password" id="password-input" placeholder="Password" onChange={this.setPassword} value={this.state.password}/>
                <button className="button button-blue" type="submit">Ingresar</button>
            </form>
            <a href="localhost:3000" className="link link-blue">Crear Cuenta</a>
            {this.state.loggedIn && <Navigate replace to='/home'/>}
        </div>
    }
}
