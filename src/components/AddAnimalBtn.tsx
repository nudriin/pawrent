import { Owner } from "@/types/owner"
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
import { useCallback, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "./ui/select"

export default function AddAnimalBtn() {
    const [formData, setFormData] = useState<AnimalAddRequest>({
        animal_name: "Gecko",
        animal_born: "2020-01-02T00:00:00.000Z",
        owner_id: 1,
        at_id: 1, //Animal Type
    })
    const navigate = useNavigate()
    const [owners, setOwners] = useState<Owner[]>([])

    const getAllOwners = useCallback(async () => {
        try {
            const response = await fetch(
                `http://localhost:5000/api/admin/owner`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            )

            const body = await response.json()

            setOwners(body.data)
            console.log(body)
        } catch (error) {
            console.log(error)
        }
    }, [])

    useEffect(() => {
        getAllOwners()
    }, [getAllOwners])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        })
        console.log(formData)
    }

    const handleSelectChange = (value: string) => {
        setFormData({
            ...formData,
            owner_id: parseInt(value),
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
                "http://localhost:5000/api/admin/animal",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        animal_name: formData.animal_name,
                        animal_born: formData.animal_born + "T00:00:00.000Z",
                        owner_id: formData.owner_id,
                        at_id: parseInt(formData.at_id.toString()),
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
                <Button className="flex items-center justify-center h-full gap-2 text-white bg-slate-900 group hover:border-slate-900 hover:cursor-pointer">
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
                            <Label htmlFor="animal_born">
                                Birth Date (Y-M-D)
                            </Label>
                            <Input
                                onChange={handleChange}
                                id="animal_born"
                                placeholder="2025-10-29"
                                type="text"
                                className="shadow-md placeholder:text-slate-500 text-slate-900"
                            />
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
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="owner_id">Owner</Label>
                            <Select
                                value={formData.owner_id.toString()} // Convert number ke string
                                onValueChange={handleSelectChange} // Gunakan onValueChange dari Shadcn Select
                            >
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select owner">
                                        {owners.find(
                                            (owner) =>
                                                owner.owner_id ===
                                                formData.owner_id
                                        )?.owner_givenname || "Select owner"}
                                    </SelectValue>
                                </SelectTrigger>
                                <SelectContent className="bg-white text-slate-900">
                                    {owners.map((owner) => (
                                        <SelectItem
                                            key={owner.owner_id}
                                            value={owner.owner_id.toString()}
                                        >
                                            {owner.owner_givenname}{" "}
                                            {owner.owner_familyname}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
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
