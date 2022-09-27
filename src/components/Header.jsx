import React from 'react';
import './Header.css';
import userimg from '../assets/profile.png';

class Header extends React.Component {
    render() {
        return <div className="Header">
            <div className="logo">GLWINBA</div>
            <h1 className="title">{this.props.title}</h1>
            <div className="user-info">
                <img className="user-image" src={userimg} alt="user"/>
                <div className="user-name">{this.props.uname}</div>
                <div className="user-mail">{this.props.mail}</div>
                <button className="button logout" type="submit">Cerrar Sesión</button>
            </div>
        </div>
    }
}

export default Header;
