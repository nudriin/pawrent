import { NavLink } from "react-router-dom"
import AdminLogout from "./AdminLogout"

export default function AdminSidebar() {
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
                        to="/dashboard/animals"
                        className={({ isActive }) =>
                            isActive ? activeLink : nonActiveLink
                        }
                    >
                        <li className="">Animal</li>
                    </NavLink>
                    <NavLink
                        to="/dashboard/owners"
                        className={({ isActive }) =>
                            isActive ? activeLink : nonActiveLink
                        }
                    >
                        <li className="">Owner</li>
                    </NavLink>
                    <NavLink
                        to="/dashboard/visits"
                        className={({ isActive }) =>
                            isActive ? activeLink : nonActiveLink
                        }
                    >
                        <li className="">Visit</li>
                    </NavLink>
                    <li
                        style={{ listStyleType: "none" }}
                        className="flex items-center mt-auto"
                    >
                        <AdminLogout />
                    </li>
                </ul>
            </div>
        </>
    )
}
