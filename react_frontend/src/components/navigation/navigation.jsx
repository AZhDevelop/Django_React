import logo from './logo.jpeg'
import style from './navigation.module.css'
import { NavLink } from 'react-router-dom'

const active_style = ({isActive}) => isActive ? style.active : style.non_active

const Navigation = () => {
    return (
        <div className={style.navigation}>
            <div className={style.logo}>
                <img src={logo} alt='Logo'></img>
                <h3>AZhDevelop</h3>
            </div>
            <br></br>
            <nav className={style.menu}>
                <NavLink to="/" className={active_style}>
                        SR Staff
                </NavLink>
                <NavLink to="/functions" className={active_style}>
                        SR Functions
                </NavLink>
                <NavLink to="/improvements" className={active_style}>
                        SR Improvements
                </NavLink>
            </nav>
        </div>
    );
}

export default Navigation