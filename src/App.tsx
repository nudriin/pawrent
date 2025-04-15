import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import { Register } from "./pages/Register"
import Profile from "./pages/pawrent/Profile"
import { Login } from "./pages/Login"
import PrivateRoute from "./components/PrivateRoute"
import SignRoute from "./components/SignRoute"
import Pet from "./pages/pet/Pet"
import DashboardHome from "./pages/admin/DashboardHome"
import { AdminLogin } from "./pages/admin/AdminLogin"
import PrivateRouteAdmin from "./components/PrivateRouteAdmin"
import Animal from "./pages/admin/Animal"
import Owner from "./pages/admin/Owner"
import Visit from "./pages/admin/Visit"
import { OwnerLogin } from "./pages/owner/OwnerLogin"
import SignRouteAdmin from "./components/SignRouteAdmin"
import SignRouteOwner from "./components/SignRouteOwner"
import PrivateRouteOwner from "./components/PrivateRouteOwner"
import OwnerAnimal from "./pages/owner/OwnerAnimal"

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
                    <Route element={<Owner />} path="/dashboard/owners" />
                    <Route element={<Visit />} path="/dashboard/visits" />
                </Route>

                <Route element={<SignRouteAdmin />}>
                    <Route element={<AdminLogin />} path="/auth" />
                </Route>

                <Route element={<SignRouteOwner />}>
                    <Route element={<OwnerLogin />} path="/auth/owner" />
                </Route>

                <Route element={<PrivateRouteOwner />}>
                    <Route element={<OwnerAnimal />} path="/owner" />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
