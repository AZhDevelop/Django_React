import Employee from "./employee/employee";

const Content = () => {
    return (
        <div className="content border-black">
            <Employee name='Fernando' lastname='Alonso'/>
            <Employee name='Lewis' lastname='Hamilton'/>
            <Employee name='Charl' lastname='Leclerc'/>
            <Employee name='Lando' lastname='Norris'/>
            <Employee name='Alex' lastname='Albon'/>
            <Employee name='Sergeo' lastname='Peres'/>
        </div>
    );
}

export default Content