import { NavLink } from "react-router-dom"

export default function AdminSidebar() {
    return (
        <>
            <div className="flex flex-col min-h-screen p-6 bg-paw">
                <NavLink to="/">
                    <div className="flex items-center justify-center my-6">
                        {/* <img className="h-[100px]" src={pky} alt="" /> */}
                    </div>
                </NavLink>
                <ul className="space-y-4 text-left">
                    <NavLink to="/dashboard/animal">
                        <li className="flex items-center gap-2 px-4 py-3 mb-2 font-bold font-rubik hover:bg-paw-secondary hover:text-white hover:rounded-full">
                            Animal
                        </li>
                    </NavLink>
                    <NavLink to="/dashboard/owner">
                        <li className="flex items-center gap-2 px-4 py-3 mb-2 font-bold font-rubik hover:bg-paw-secondary hover:text-white hover:rounded-full">
                            Owner
                        </li>
                    </NavLink>
                    <NavLink to="/dashboard/visit">
                        <li className="flex items-center gap-2 px-4 py-3 mb-2 font-bold font-rubik hover:bg-paw-secondary hover:text-white hover:rounded-full">
                            Visit
                        </li>
                    </NavLink>
                </ul>
            </div>
        </>
    )
}
