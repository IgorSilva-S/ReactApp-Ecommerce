import React from "react";
import './style.css';

const Header = () => {
    return (
        <header>
            <div className="header center">
                <picture>
                    <img src='./assets/img/logo.png' alt="Retro Life" />
                </picture>
                <nav>
                    <ul>
                        <li>
                            <a href='#'>Home</a>
                        </li>
                        <li>
                            <a href='#games'>Jogos</a>
                        </li>
                        <li>
                            <a href='#revivals'>Revivals</a>
                        </li>
                        <li>
                            <a href='#about'>Sobre</a>
                        </li>
                        <li>
                            <a href='#contact'>Contato</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header