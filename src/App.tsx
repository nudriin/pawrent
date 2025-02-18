import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import { Register } from "./pages/Register"
import Profile from "./pages/pawrent/Profile"
import { Login } from "./pages/Login"
import PrivateRoute from "./components/PrivateRoute"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path="/" />
                <Route element={<Register />} path="/register" />
                <Route element={<Login />} path="/login" />
                <Route element={<PrivateRoute />}>
                    <Route element={<Profile />} path="/profile" />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
