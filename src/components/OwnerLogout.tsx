import { useNavigate } from "react-router-dom"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "./ui/alert-dialog"
import { Button } from "./ui/button"
import { useCookies } from "react-cookie"

export default function OwnerLogout() {
    const [, , removeCookie] = useCookies(["owner_auth"])
    const navigate = useNavigate()
    const handleLogout = () => {
        removeCookie("owner_auth")
        navigate("/")
    }
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button className="flex items-center w-full gap-2 px-4 py-3 mb-2 font-bold text-left text-red-500 border-2 border-red-500 rounded-full cursor-pointer font-rubik hover:bg-red-400 hover:text-white hover:rounded-full hover:border-red-400">
                    Logout
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="bg-white text-slate-900">
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        Are you absolutely sure?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will remove the
                        session data from our servers.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel className="text-white cursor-pointer bg-slate-900">
                        Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction
                        className="text-white bg-red-500 cursor-pointer hover:bg-slate-700"
                        onClick={handleLogout}
                        type="submit"
                    >
                        Continue
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
