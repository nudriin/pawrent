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
import { useNavigate } from "react-router-dom"

export default function DeleteVisitBtn({ visitId }: { visitId: number }) {
    const navigate = useNavigate()
    const handleDelete = async (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        try {
            const response = await fetch(
                "http://localhost:5000/api/admin/visit",
                {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ visit_id: visitId }),
                }
            )

            const body = await response.json()

            if (body) {
                navigate(0)
            }
            console.log(body)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button
                    className="text-white bg-red-500 cursor-pointer hover:bg-red-600"
                    variant={"destructive"}
                >
                    Delete
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="bg-white text-slate-900">
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        Are you absolutely sure?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently
                        delete your pet and remove the data from our servers.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel className="text-white cursor-pointer bg-slate-900">
                        Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction
                        className="text-white bg-red-500 cursor-pointer hover:bg-slate-700"
                        onClick={handleDelete}
                        type="submit"
                    >
                        Continue
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
