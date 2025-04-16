import { Button } from "./ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "./ui/dialog"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { VisitEditRequest } from "@/types/visit"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
export default function EditVisitBtn({ visit }: { visit: VisitEditRequest }) {
    const [formData, setFormData] = useState<VisitEditRequest>(visit)
    const navigate = useNavigate()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
            visit_id: visit.visit_id,
        })
        console.log(formData)
    }

    const handleAdd = async (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        try {
            const response = await fetch(
                "http://localhost:5000/api/admin/visit",
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
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
        <Dialog>
            <DialogTrigger asChild>
                <Button className="text-white cursor-pointer bg-slate-900 hover:bg-slate-800">
                    <p className="font-semibold">Edit</p>
                </Button>
            </DialogTrigger>
            <DialogContent className="bg-white text-slate-900">
                <DialogHeader className="text-left">
                    <DialogTitle className="text-2xl font-semibold">
                        Edit Visit Data
                    </DialogTitle>
                    <DialogDescription>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit.
                    </DialogDescription>
                </DialogHeader>
                <form>
                    <div className="grid items-center w-full gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="visit_notes">Notes</Label>
                            <Input
                                onChange={handleChange}
                                id="visit_notes"
                                placeholder="Chiko"
                                defaultValue={visit.visit_notes}
                                className="shadow-md placeholder:text-slate-500 text-slate-900"
                            />
                        </div>
                    </div>
                </form>
                <DialogFooter>
                    <Button
                        onClick={handleAdd}
                        className="w-full text-white cursor-pointer text-secondary bg-slate-900 hover:bg-slate-800 hover:text-white"
                        type="submit"
                        style={{ color: "white" }}
                    >
                        Edit
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
