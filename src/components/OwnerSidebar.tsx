import { useCookies } from "react-cookie"
import { NavLink, useNavigate } from "react-router-dom"

export default function OwnerSidebar() {
    const [, , removeCookie] = useCookies(["owner_auth"])
    const navigate = useNavigate()
    const handleLogout = () => {
        removeCookie("owner_auth")
        navigate("/")
    }

    const activeLink =
        "flex items-center gap-2 px-4 py-3 mb-2 font-bold font-rubik bg-paw-secondary text-paw-secondary text-white rounded-full"
    const nonActiveLink =
        "flex items-center gap-2 px-4 py-3 mb-2 font-bold font-rubik hover:bg-paw-secondary hover:text-white hover:rounded-full"
    return (
        <>
            <div className="flex flex-col min-h-screen p-6 bg-paw">
                <NavLink to="/">
                    <div className="flex items-center justify-center my-6">
                        {/* <img className="h-[100px]" src={pky} alt="" /> */}
                    </div>
                </NavLink>
                <ul className="space-y-4 text-left">
                    <NavLink
                        to="/owner/animals"
                        className={({ isActive }) =>
                            isActive ? activeLink : nonActiveLink
                        }
                    >
                        <li>Animal</li>
                    </NavLink>
                    <NavLink
                        to="/owner/visits"
                        className={({ isActive }) =>
                            isActive ? activeLink : nonActiveLink
                        }
                    >
                        <li>Visits</li>
                    </NavLink>
                    <NavLink
                        to="/owner/submissions"
                        className={({ isActive }) =>
                            isActive ? activeLink : nonActiveLink
                        }
                    >
                        <li>Visit Submissions</li>
                    </NavLink>
                </ul>
                <li
                    className="flex items-center gap-2 px-4 py-3 mt-4 font-bold text-red-500 border-2 border-red-500 rounded-full cursor-pointer font-rubik hover:bg-red-400 hover:text-white hover:rounded-full hover:border-red-400"
                    onClick={handleLogout}
                >
                    Logout
                </li>
            </div>
        </>
    )
}
