import React from "react"
import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <div className="menu">
            <nav>
                <ul>
                    <li>
                        <Link to='/dashboard'>Dashboard</Link>
                    </li>
                    <li>
                        <Link to='/'>mensagem</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default Menu;