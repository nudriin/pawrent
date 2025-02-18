import { useCookies } from "react-cookie"
import { Navigate, Outlet } from "react-router-dom"

export default function PrivateRoute() {
    const [cookies] = useCookies(["auth"])

    const auth = cookies.auth

    if (!auth) {
        return <Navigate to="/login" />
    }

    try {
        console.log(auth)
        return auth.id_pawrent ? <Outlet /> : <Navigate to="/login" />
    } catch (error) {
        console.log(error)
        return <Navigate to="/login" />
    }
}
