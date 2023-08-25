import logo from './logo.jpeg'
import style from './navigation.module.css'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
    return (
        <div className={style.navigation}>
            <div className={style.logo}>
                <img src={logo} alt='Logo'></img>
                <h3>AZhDevelop</h3>
            </div>
            <br></br>
            <nav className={style.menu}>
                <NavLink to="/" className={style.link}>
                    <div className={style.menu_element}>
                        SR Staff
                    </div>
                </NavLink>
                <NavLink to="/functions" className={style.link}>
                    <div className={style.menu_element}>
                        SR Functions
                    </div>
                </NavLink>
                <NavLink to="/improvements" className={style.link}>
                    <div className={style.menu_element}>
                        SR Improvements
                    </div>
                </NavLink>
            </nav>
        </div>
    );
}

export default Navigation