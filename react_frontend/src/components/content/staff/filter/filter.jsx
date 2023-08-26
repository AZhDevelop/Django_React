import style from './filter.module.css'

const Filter = () => {
    return (
        <div>
            <label>filter</label>
            <select className={style.select}>
                <option>filter 1</option>
                <option>filter 2</option>
                <option>filter 3</option>
                <option>filter 4</option>
                <option>filter 5</option>
            </select>
        </div>
    )
}

export default Filter