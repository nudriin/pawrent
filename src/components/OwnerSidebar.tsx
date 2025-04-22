import { useCookies } from "react-cookie"
import { NavLink, useNavigate } from "react-router-dom"

export default function OwnerSidebar() {
    const [, , removeCookie] = useCookies(["owner_auth"])
    const navigate = useNavigate()
    const handleLogout = () => {
        removeCookie("owner_auth")
        navigate("/")
    }
    return (
        <>
            <div className="flex flex-col min-h-screen p-6 bg-paw">
                <NavLink to="/">
                    <div className="flex items-center justify-center my-6">
                        {/* <img className="h-[100px]" src={pky} alt="" /> */}
                    </div>
                </NavLink>
                <ul className="space-y-4 text-left">
                    <NavLink to="/owner">
                        <li className="flex items-center gap-2 px-4 py-3 mb-2 font-bold font-rubik hover:bg-paw-secondary hover:text-white hover:rounded-full">
                            Animal
                        </li>
                    </NavLink>
                    <NavLink to="/owner/visits">
                        <li className="flex items-center gap-2 px-4 py-3 mb-2 font-bold font-rubik hover:bg-paw-secondary hover:text-white hover:rounded-full">
                            Visits
                        </li>
                    </NavLink>
                    <NavLink to="/owner/visits/submit">
                        <li className="flex items-center gap-2 px-4 py-3 mb-2 font-bold font-rubik hover:bg-paw-secondary hover:text-white hover:rounded-full">
                            Visit Submissions
                        </li>
                    </NavLink>
                </ul>
                <li
                    className="flex items-center gap-2 px-4 py-3 mb-2 font-bold bg-red-500 rounded-full cursor-pointer font-rubik hover:bg-red-400 hover:text-white hover:rounded-full"
                    onClick={handleLogout}
                >
                    Logout
                </li>
            </div>
        </>
    )
}
