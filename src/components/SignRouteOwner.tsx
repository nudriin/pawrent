import { useCookies } from "react-cookie"
import { Navigate, Outlet } from "react-router-dom"

export default function SignRouteOwner() {
    const [cookies] = useCookies(["owner_auth"])

    const owner_auth = cookies.owner_auth

    if (!owner_auth) {
        return <Outlet />
    }

    try {
        console.log(owner_auth)
        return owner_auth.owner_id ? <Navigate to="/" /> : <Outlet />
    } catch (error) {
        console.log(error)
        return <Outlet />
    }
}
