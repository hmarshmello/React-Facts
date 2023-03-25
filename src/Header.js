import './index.css';
import React from "react"


export default function Header() {
    return (
        <header>
            <nav className="nav">
                <div className="nav-icon">
                    <img src="./logo512.png" className="nav-logo" alt=""/>
                    <h1>ReactFacts</h1>
                </div>
                <h3>React Course - Project 1</h3>
            </nav>
        </header>
    )
}
