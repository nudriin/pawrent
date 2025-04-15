import { useCookies } from "react-cookie"
import { Navigate, Outlet } from "react-router-dom"

export default function PrivateRouteOwner() {
    const [cookies] = useCookies(["owner_auth"])

    const owner_auth = cookies.owner_auth

    if (!owner_auth) {
        return <Navigate to="/auth/owner" />
    }

    try {
        console.log(owner_auth)
        return owner_auth.owner_id ? <Outlet /> : <Navigate to="/auth/owner" />
    } catch (error) {
        console.log(error)
        return <Navigate to="/auth/owner" />
    }
}
