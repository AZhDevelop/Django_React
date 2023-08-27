import logo from './logo.jpeg'
import style from './navigation.module.css'
import { NavLink } from 'react-router-dom'

const active_style = ({isActive}) => isActive ? style.active : style.non_active
const logo_active_style = ({isActive}) => isActive ? style.logo : style.logo

const Navigation = () => {
    return (
        <div className={style.navigation}>
            <NavLink to='/' className={logo_active_style}>
                <img src={logo} alt='Logo'></img>
                <h3>AZhDevelop</h3>
            </NavLink>
            <br></br>
            <nav className={style.menu}>
                <NavLink to="/" className={active_style}>SR Staff</NavLink>
                <NavLink to="/functions" className={active_style}>SR Functions</NavLink>
                <NavLink to="/improvements" className={active_style}>SR Improvements</NavLink>
                <NavLink to="/reactapi" className={active_style}>SR API</NavLink>
            </nav>
        </div>
    );
}

export default Navigation