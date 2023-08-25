import Staff from "./staff/staff"
import Functions from "./functions/functions";
import Improvements from "./improvements/improvements";
import { Routes, Route } from 'react-router-dom'

const Content = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Staff />} />
                <Route path="functions" element={<Functions />} />
                <Route path="improvements" element={<Improvements />} />
            </Routes>
        </div>
    )
}

export default Content