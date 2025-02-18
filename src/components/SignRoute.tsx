import { useCookies } from "react-cookie"
import { Navigate, Outlet } from "react-router-dom"

export default function SignRoute() {
    const [cookies] = useCookies(["auth"])

    const auth = cookies.auth

    if (!auth) {
        return <Outlet />
    }

    try {
        console.log(auth)
        return auth.id_pawrent ? <Navigate to="/" /> : <Outlet />
    } catch (error) {
        console.log(error)
        return <Outlet />
    }
}
