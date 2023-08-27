import Staff from "./staff/staff"
import Functions from "./functions/functions";
import Improvements from "./improvements/improvements";
import { Routes, Route } from 'react-router-dom'
import ReactApi from "./reactapi/reactapi";

const Content = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Staff />} />
                <Route path="functions" element={<Functions />} />
                <Route path="improvements" element={<Improvements />} />
                <Route path="reactapi" element={<ReactApi />} />
            </Routes>
        </div>
    )
}

export default Content