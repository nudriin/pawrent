import { useCookies } from "react-cookie"
import { Navigate, Outlet } from "react-router-dom"

export default function PrivateRouteAdmin() {
    const [cookies] = useCookies(["admin_auth"])

    const admin_auth = cookies.admin_auth

    if (!admin_auth) {
        return <Navigate to="/auth" />
    }

    try {
        console.log(admin_auth)
        return admin_auth.id ? <Outlet /> : <Navigate to="/auth" />
    } catch (error) {
        console.log(error)
        return <Navigate to="/auth" />
    }
}
