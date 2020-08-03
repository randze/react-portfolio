import React from 'react';

function Header( props ) {
    return (
        <header>
            <nav className="navbar text-light">
                <span className="navbar-brand mb-0 h1">randze</span>
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <Link className="nav-link" to='/'>About Me</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/portfolio'>Portfolio</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/contact'>Contact Me</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
