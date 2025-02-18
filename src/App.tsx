import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import { Register } from "./pages/Register"
import Profile from "./pages/pawrent/Profile"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path="/" />
                <Route element={<Register />} path="/register" />
                <Route element={<Profile />} path="/profile" />
            </Routes>
        </BrowserRouter>
    )
}

export default App
