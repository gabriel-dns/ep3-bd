import './Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <Link to="/">
                 Início
            </Link>
                <a href="#submenu2" class="submenu-toggle">Consultas</a>
                <ul class="submenu" id="submenu2">
                    <li><Link to="/consulta">Agendar</Link></li>
                    <li><Link to="/gestao">Gestao Agenda</Link></li>
                </ul>
           
        </nav>
    </aside>