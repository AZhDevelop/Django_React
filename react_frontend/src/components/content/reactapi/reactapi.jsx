import style from './reactapi.module.css'

const ReactApi = () => {
    
    const api_url = "http://127.0.0.1:8000/api/"

    const getURL = () => {

        const get_request = fetch(api_url)
        return console.log(get_request)

    }

    return (
        <div className={style.reactapi}>
            <div>
                API
            </div>
            <button className={style.button} onClick={getURL}>API Request</button>
        </div>
    )
}

export default ReactApi