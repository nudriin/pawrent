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
import { AnimalEditRequest } from "@/types/animal"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
export default function EditAnimalBtn({
    animal,
}: {
    animal: AnimalEditRequest
}) {
    const [formData, setFormData] = useState<AnimalEditRequest>(animal)
    const navigate = useNavigate()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value =
            e.target.id === "animal_born"
                ? `${e.target.value}T00:00:00.000Z`
                : e.target.value

        setFormData({
            ...formData,
            [e.target.id]: value,
        })
    }

    const handleAdd = async (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        try {
            const response = await fetch(
                "http://localhost:5000/api/admin/animal",
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        animal_id: formData.animal_id,
                        animal_name: formData.animal_name,
                        animal_born: formData.animal_born,
                    }),
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
                        Edit Pet
                    </DialogTitle>
                    <DialogDescription>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit.
                    </DialogDescription>
                </DialogHeader>
                <form>
                    <div className="grid items-center w-full gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="animal_name">Name</Label>
                            <Input
                                onChange={handleChange}
                                id="animal_name"
                                placeholder="Chiko"
                                defaultValue={animal.animal_name}
                                className="shadow-md placeholder:text-slate-500 text-slate-900"
                            />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="animal_born">Birth Date</Label>
                            <div className="">
                                <input
                                    type="date"
                                    id="animal_born"
                                    onChange={handleChange}
                                    className="flex w-full px-3 py-2 text-sm bg-white border rounded-md shadow-md justify-center0 jus text-slate-900 border-slate-300 ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
                                    value={
                                        new Date(formData.animal_born)
                                            .toISOString()
                                            .split("T")[0]
                                    }
                                />
                            </div>
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
