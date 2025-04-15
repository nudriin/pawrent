import { useCookies } from "react-cookie"
import { Navigate, Outlet } from "react-router-dom"

export default function SignRouteAdmin() {
    const [cookies] = useCookies(["admin_auth"])

    const admin_auth = cookies.admin_auth

    if (!admin_auth) {
        return <Outlet />
    }

    try {
        console.log(admin_auth)
        return admin_auth.id ? <Navigate to="/" /> : <Outlet />
    } catch (error) {
        console.log(error)
        return <Outlet />
    }
}
