import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import { Register } from "./pages/Register"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path="/" />
                <Route element={<Register />} path="/register" />
            </Routes>
        </BrowserRouter>
    )
}

export default App
