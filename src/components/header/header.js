import React from "react";
import logo from '../../images/logo.svg'

const Header = () => {
    return(
        <header className="header">
            <a href="/">
                <img src={logo} alt="logo" className="logo"></img>
            </a>

            <nav>
                <ul className="nav-list">
                    <li className="nav-link"><a href="/">Home</a></li>
                    <li className="nav-link"><a href="/">New</a></li>
                    <li className="nav-link"><a href="/">Popular</a></li>
                    <li className="nav-link"><a href="/">Trending</a></li>
                    <li className="nav-link"><a href="/">Categories</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header