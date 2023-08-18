import logo from './logo.jpeg'
import style from './navigation.module.css'

const Navigation = () => {
    return (
        <div className={style.navigation}>
            <div className={style.logo}>
                <img src={logo} alt='Logo'></img>
                <h3>AZhDevelop</h3>
            </div>
            <br></br>
            <nav className={style.menu}>
                <div className={style.menu_element}>
                    <a href="#" className={style.link}>SR Staff</a>
                </div>
                <div className={style.menu_element}>
                    <a href="#" className={style.link}>SR Functions</a>
                </div>
                <div className={style.menu_element}>
                    <a href="#" className={style.link}>SR Improvements</a>
                </div>
                <div className={style.menu_element}>
                    <a href="#" className={style.link}>SR Menu 4</a>
                </div>
                <div className={style.menu_element}>
                    <a href="#" className={style.link}>SR Menu 5</a>
                </div>
            </nav>
        </div>
    );
}

export default Navigation