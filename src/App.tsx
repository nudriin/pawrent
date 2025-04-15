import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import { Register } from "./pages/Register"
import Profile from "./pages/pawrent/Profile"
import { Login } from "./pages/Login"
import PrivateRoute from "./components/PrivateRoute"
import SignRoute from "./components/SignRoute"
import Pet from "./pages/pet/Pet"
import DashboardHome from "./pages/admin/DashboardHome"
import { AdminLogin } from "./pages/AdminLogin"
import PrivateRouteAdmin from "./components/PrivateRouteAdmin"
import Animal from "./pages/pet/Animal"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path="/" />

                <Route element={<SignRoute />}>
                    <Route element={<Register />} path="/register" />
                    <Route element={<Login />} path="/login" />
                </Route>
                <Route element={<PrivateRoute />}>
                    <Route element={<Profile />} path="/profile" />
                    <Route element={<Pet />} path="/pet" />
                </Route>

                <Route element={<PrivateRouteAdmin />}>
                    <Route element={<DashboardHome />} path="/dashboard" />
                    <Route element={<Animal />} path="/dashboard/animals" />
                </Route>

                <Route element={<SignRoute />}>
                    <Route element={<AdminLogin />} path="/auth" />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
