import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link"
import { Button } from "./ui/button"
import { useCookies } from "react-cookie"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

export default function Header() {
    const [cookies] = useCookies(["auth"])

    const auth = cookies.auth
    return (
        <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 py-3 mt-3 mb-4 ml-4 mr-4 border rounded-full border-paw backdrop-blur-sm bg-white/50 border-primary text-slate-900">
            <div>
                <h1 className="font-bold text-full">Pawrent</h1>
            </div>

            <ul className="items-center justify-end hidden gap-2 lg:flex">
                <HashLink to="/#home">
                    <li className="flex items-center gap-3 px-3 py-2 font-bold cursor-pointer font-rubik text-slate-900 hover:bg-paw hover:text-white hover:rounded-full">
                        Home
                    </li>
                </HashLink>
                <HashLink to="/#charity">
                    <li className="flex items-center gap-3 px-3 py-2 font-bold cursor-pointer font-rubik text-slate-900 hover:bg-paw hover:text-white hover:rounded-full">
                        Charity
                    </li>
                </HashLink>
                <HashLink to="/#doctor">
                    <li className="flex items-center gap-3 px-3 py-2 font-bold cursor-pointer font-rubik text-slate-900 hover:bg-paw hover:text-white hover:rounded-full">
                        Doctor
                    </li>
                </HashLink>
                {auth?.id_pawrent ? (
                    <div className="flex gap-2">
                        <Link to="/pet">
                            <li className="flex items-center gap-3 px-3 py-2 font-bold cursor-pointer font-rubik text-slate-900 hover:bg-paw hover:text-white hover:rounded-full">
                                Pet
                            </li>
                        </Link>
                        <Link to="/profile">
                            <Avatar className="w-8 h-8 mx-auto">
                                <AvatarImage
                                    src="https://avatars.githubusercontent.com/u/145898263?v=4"
                                    alt="@shadcn"
                                />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </Link>
                    </div>
                ) : (
                    <div className="flex gap-2">
                        <Link to="/auth">
                            <li className="">
                                <Button className="border rounded-full cursor-pointer backdrop-blur-sm border-paw bg-white/10 text-primary hover:text-white">
                                    Login
                                </Button>
                            </li>
                        </Link>
                        <Link to="/register">
                            <li className="">
                                <Button className="rounded-full cursor-pointer bg-paw">
                                    Register
                                </Button>
                            </li>
                        </Link>
                    </div>
                )}
            </ul>
        </div>
    )
}
