import logo from './logo.png'
import style from './employee.module.css'

const Employee = (props) => {
    return (
        <div className={style.employee}>
            <div>
                <img src={logo} alt='Logo'></img>
            </div>
            <div className={style.name}>
                {props.name} {props.lastname}
            </div>
        </div>
    );
}

export default Employee