import React from 'react'
import {Switch, Route, link} from 'react-router-dom'
import './App.css'

// components
// import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

// import project adata
import projects from './projects.json'


function App() {
    return (
        <>
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
            <Switch>
                <Route path='/portfolio'>
                    <Portfolio projects={projects} />
                </Route>
                <Route path='/contact'>
                    <Contact />
                </Route>
                <Route path='/'>
                    <Home />
                </Route>
            </Switch>
            <Footer />
        </>
    );
}

export default App;
