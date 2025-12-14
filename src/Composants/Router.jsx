import {Routes, Route} from "react-router-dom"
import Home from "../Pages/Home"
import Error from "../Pages/Error"

function Router() {
    return (
        <Routes>
            <Route path="/user/:userId" element={<Home />} />
            <Route path="*" element={<Error />} />
        </Routes>
    )
}

export default Router