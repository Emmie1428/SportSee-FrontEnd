import {Routes, Route} from "react-router-dom"
import App from "../App"
import Home from "../Pages/Home/Home"
import Error from "../Pages/Error/Error"

function Router() {
    return (
        <Routes>
            <Route path="/user/:userId" element={<Home />} />
            <Route path="*" element={<Error />} />
        </Routes>
    )
}

export default Router