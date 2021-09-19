import React from "react";
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="header">
            <h1>zap system </h1>

            <div className="menu">
                <nav>
                    <ul>
                        <li>
                            <Link to='/dashboard'>Dashboard</Link>
                        </li>
                        <li>
                            <Link to='/message'>Mensagem</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
export default Header;