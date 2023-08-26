import style from './staff.module.css'
import Employee from "./employee/employee";
import EmployeeInfo from './employeeInfo/employeeInfo'

const Staff = () => {
    return (
        <div className={style.staff}>
            <div className={style.filter}>
                <div>
                    <label>filter</label>
                    <select>
                        <option>filter 1</option>
                        <option>filter 2</option>
                        <option>filter 3</option>
                        <option>filter 4</option>
                        <option>filter 5</option>
                    </select>
                </div>
                <div>
                    <label>filter</label>
                    <select>
                        <option>filter 1</option>
                        <option>filter 2</option>
                        <option>filter 3</option>
                        <option>filter 4</option>
                        <option>filter 5</option>
                    </select>
                </div>
                <div>
                    <label>filter</label>
                    <select>
                        <option>filter 1</option>
                        <option>filter 2</option>
                        <option>filter 3</option>
                        <option>filter 4</option>
                        <option>filter 5</option>
                    </select>
                </div>
                <div>
                    <label>filter</label>
                    <select>
                        <option>filter 1</option>
                        <option>filter 2</option>
                        <option>filter 3</option>
                        <option>filter 4</option>
                        <option>filter 5</option>
                    </select>
                </div>
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