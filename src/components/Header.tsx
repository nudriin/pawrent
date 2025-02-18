import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link"
import { Button } from "./ui/button"

export default function Header() {
    return (
        <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 py-3 mt-3 mb-4 ml-4 mr-4 ring ring-paw backdrop-blur-sm bg-white/50 rounded-full border-primary">
            <div>
                <h1 className="text-full font-bold">Pawrent</h1>
            </div>

            <ul className="items-center justify-end hidden gap-2 lg:flex">
                <HashLink to="/#home">
                    <li className="flex items-center gap-3 px-3 py-2 font-bold font-rubik hover:bg-paw hover:text-white hover:rounded-full cursor-pointer">
                        Home
                    </li>
                </HashLink>
                <HashLink to="/#charity">
                    <li className="flex items-center gap-3 px-3 py-2 font-bold font-rubik hover:bg-paw hover:text-white hover:rounded-full cursor-pointer">
                        Charity
                    </li>
                </HashLink>
                <HashLink to="/#doctor">
                    <li className="flex items-center gap-3 px-3 py-2 font-bold font-rubik hover:bg-paw hover:text-white hover:rounded-full cursor-pointer">
                        Doctor
                    </li>
                </HashLink>
                <Link to="/login">
                    <li className="">
                        <Button className="cursor-pointer rounded-full backdrop-blur-sm ring ring-paw bg-white/10 text-primary hover:text-white">
                            Login
                        </Button>
                    </li>
                </Link>
                <Link to="/register">
                    <li className="">
                        <Button className="cursor-pointer rounded-full bg-paw">
                            Register
                        </Button>
                    </li>
                </Link>
            </ul>
        </div>
    )
}
