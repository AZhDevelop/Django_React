import style from './staff.module.css'
import Employee from "./employee/employee";
import EmployeeInfo from './employeeInfo/employeeInfo'
import Filter from './filter/filter';

const Staff = () => {
    return (
        <div className={style.staff}>
            <div className={style.filter}>
                <Filter />
                <Filter />
                <Filter />
            </div>
            <div className={style.employee}>
                <Employee name='Fernando' lastname='Alonso'/>
                <Employee name='Lewis' lastname='Hamilton'/>
                <Employee name='Charl' lastname='Leclerc'/>
                <Employee name='Lando' lastname='Norris'/>
                <Employee name='Alex' lastname='Albon'/>
                <Employee name='Sergeo' lastname='Peres'/>
            </div>
            <div className={style.employee_info}>
                <EmployeeInfo />
                <EmployeeInfo />
                <EmployeeInfo />
                <EmployeeInfo />
                <EmployeeInfo />
                <EmployeeInfo />
                <EmployeeInfo />
                <EmployeeInfo />
                <EmployeeInfo />
                <EmployeeInfo />
                <EmployeeInfo />
                <EmployeeInfo />
            </div>
        </div>
    );
}

export default Staff