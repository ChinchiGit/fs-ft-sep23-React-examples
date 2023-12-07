import React, {useContext} from "react";
import { Link } from 'react-router-dom'
import './Nav.css'

import { ThemeContext } from '../../../context/ThemeContext'

const Nav = () => {

const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <nav>
        <ul className="nav-bar">
            <li><Link className={'link-'+theme} to='/'>Home</Link></li>
            <li><Link className={'link-'+theme} to='/about'>About</Link></li>
            <li> <Link className={'link-'+theme} to='/contact'>Contact</Link></li>
            <li> <Link className={'link-'+theme} to='/christmaslist'>Christmas List</Link></li>
            <li> <Link className={'link-'+theme} to='/staff'>Staff</Link></li>
            <li> <Link className={'link-'+theme} to='/christmascourse'>Christmas Course</Link></li>
            <li> <Link className={'link-'+theme} to='/topic'>Topic</Link></li>
            <li> <Link className={'link-'+theme} to='/donations'>Donations</Link></li>

        </ul >
    </nav >
)
};

export default Nav;
