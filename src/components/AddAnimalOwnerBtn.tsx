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
import { AnimalAddRequest } from "@/types/animal"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "./ui/select"
import { useCookies } from "react-cookie"
import { toast } from "@/hooks/use-toast"

export default function AddAnimalOwnerBtn() {
    const [formData, setFormData] = useState<AnimalAddRequest>({
        animal_name: "Gecko",
        animal_born: "2020-01-02T00:00:00.000Z",
        owner_id: 1,
        at_id: 1, //Animal Type
    })
    const navigate = useNavigate()
    const [cookies] = useCookies(["owner_auth"])

    const owner_auth = cookies.owner_auth

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

    const handleSelectTypeChange = (value: string) => {
        setFormData({
            ...formData,
            at_id: parseInt(value),
        })
    }

    const handleAdd = async (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        try {
            const response = await fetch(
                "http://localhost:5001/api/owner/animal/create",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        ...formData,
                        owner_id: owner_auth.owner_id,
                        at_id: parseInt(formData.at_id.toString()),
                    }),
                }
            )

            const body = await response.json()
            if (body.success === false) {
                throw Error(body.message)
            }

            toast({
                title: "Sucess",
                description: "Animal added successfully",
                style: {
                    backgroundColor: "#183dff",
                    color: "#fff",
                },
            })

            if (body) {
                navigate(0)
            }
            console.log(body)
        } catch (error) {
            console.log(error)
            toast({
                title: "Error",
                description: `${error}`,
                style: {
                    backgroundColor: "#f54260",
                    color: "#fff",
                },
            })
        }
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="flex items-center justify-center h-full gap-2 text-white bg-slate-900 group hover:border-slate-900 hover:cursor-pointer hover:bg-slate-800 hover:text-white">
                    <p className="font-semibold">Add Pet</p>
                </Button>
            </DialogTrigger>
            <DialogContent className="bg-white text-slate-900">
                <DialogHeader className="text-left">
                    <DialogTitle className="text-2xl font-semibold">
                        Add Pet
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
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="at_id">Pet Type</Label>
                            <Select
                                value={formData.at_id.toString()}
                                onValueChange={handleSelectTypeChange}
                            >
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select owner" />
                                </SelectTrigger>
                                <SelectContent className="bg-white text-slate-900">
                                    <SelectItem value="1">Kucing</SelectItem>
                                    <SelectItem value="2">Anjing</SelectItem>
                                    <SelectItem value="3">Kelinci</SelectItem>
                                    <SelectItem value="4">Hamster</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </form>
                <DialogFooter>
                    <Button
                        onClick={handleAdd}
                        className="w-full text-white cursor-pointer bg-slate-900 hover:bg-slate-800 hover:text-white"
                        type="submit"
                    >
                        Save
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
