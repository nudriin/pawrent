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
import { OwnerAddRequest } from "@/types/owner"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function AddOwnerBtn() {
    const [formData, setFormData] = useState<OwnerAddRequest>({
        owner_givenname: "John",
        owner_familyname: "Doe",
        owner_address: "014 Catharine Parkways",
        owner_phone: "082323643264",
    })
    const navigate = useNavigate()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        })
        console.log(formData)
    }

    const handleAdd = async (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        try {
            const response = await fetch(
                "http://localhost:5000/api/admin/owner",
                {
                    method: "POST",
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
                <Button className="flex items-center justify-center h-full gap-2 text-white bg-slate-900 group hover:border-slate-900 hover:cursor-pointer hover:bg-slate-800 hover:text-white">
                    <p className="font-semibold">Add Owner</p>
                </Button>
            </DialogTrigger>
            <DialogContent className="bg-white text-slate-900">
                <DialogHeader className="text-left">
                    <DialogTitle className="text-2xl font-semibold">
                        Add Owner
                    </DialogTitle>
                    <DialogDescription>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit.
                    </DialogDescription>
                </DialogHeader>
                <form>
                    <div className="grid items-center w-full gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="owner_givenname">First Name</Label>
                            <Input
                                onChange={handleChange}
                                id="owner_givenname"
                                placeholder="John"
                                className="shadow-md placeholder:text-slate-500 text-slate-900"
                            />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="owner_familyname">Last Name</Label>
                            <Input
                                onChange={handleChange}
                                id="owner_familyname"
                                placeholder="Doe"
                                type="text"
                                className="shadow-md placeholder:text-slate-500 text-slate-900"
                            />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="owner_address">Address</Label>
                            <Input
                                onChange={handleChange}
                                id="owner_address"
                                placeholder="014 Catharine Parkways"
                                type="text"
                                className="shadow-md placeholder:text-slate-500 text-slate-900"
                            />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="owner_phone">Phone</Label>
                            <Input
                                onChange={handleChange}
                                id="owner_phone"
                                placeholder="082323****"
                                type="text"
                                className="shadow-md placeholder:text-slate-500 text-slate-900"
                            />
                        </div>
                    </div>
                </form>
                <DialogFooter>
                    <Button
                        onClick={handleAdd}
                        className="w-full text-white cursor-pointer bg-slate-900"
                        type="submit"
                    >
                        Save
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
