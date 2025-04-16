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
import { VisitAddRequest } from "@/types/visit"
import { useCallback, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "./ui/select"
import { Animal } from "@/types/animal"

export default function AddVisitBtn() {
    const [formData, setFormData] = useState<VisitAddRequest>({
        visit_date_time: "2024-09-10T00:00:00.000Z",
        visit_notes: "Lorem",
        animal_id: 1,
        vet_id: 1,
        from_visit_id: null,
    })
    const navigate = useNavigate()
    const [animals, setAnimals] = useState<Animal[]>([])

    const getAllAnimals = useCallback(async () => {
        try {
            const response = await fetch(
                `http://localhost:5000/api/admin/animal`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            )

            const body = await response.json()

            setAnimals(body.data)
            console.log(body)
        } catch (error) {
            console.log(error)
        }
    }, [])

    useEffect(() => {
        getAllAnimals()
    }, [getAllAnimals])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value =
            e.target.id === "visit_date_time"
                ? `${e.target.value}T00:00:00.000Z`
                : e.target.value

        setFormData({
            ...formData,
            [e.target.id]: value,
        })
    }

    const handleSelectChange = (value: string) => {
        setFormData({
            ...formData,
            animal_id: parseInt(value),
        })
    }

    const handleAdd = async (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        try {
            const response = await fetch(
                "http://localhost:5000/api/admin/visit",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        visit_date_time: formData.visit_date_time,
                        visit_notes: formData.visit_notes,
                        animal_id: formData.animal_id,
                        vet_id: parseInt(formData.vet_id.toString()),
                        from_visit_id: null,
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

    const handleSelectTypeChange = (value: string) => {
        setFormData({
            ...formData,
            vet_id: parseInt(value),
        })
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="flex items-center justify-center h-full gap-2 text-white bg-slate-900 group hover:border-slate-900 hover:cursor-pointer hover:bg-slate-800 hover:text-white">
                    <p className="font-semibold">Add Visit</p>
                </Button>
            </DialogTrigger>
            <DialogContent className="bg-white text-slate-900">
                <DialogHeader className="text-left">
                    <DialogTitle className="text-2xl font-semibold">
                        Add Visit
                    </DialogTitle>
                    <DialogDescription>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit.
                    </DialogDescription>
                </DialogHeader>
                <form>
                    <div className="grid items-center w-full gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="visit_date_time">Birth Date</Label>
                            <div className="">
                                <input
                                    type="date"
                                    id="visit_date_time"
                                    onChange={handleChange}
                                    className="flex w-full px-3 py-2 text-sm bg-white border rounded-md shadow-md justify-center0 jus text-slate-900 border-slate-300 ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
                                    value={
                                        new Date(formData.visit_date_time)
                                            .toISOString()
                                            .split("T")[0]
                                    }
                                />
                            </div>
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="visit_notes">Notes</Label>
                            <Input
                                onChange={handleChange}
                                id="visit_notes"
                                placeholder="Add some notes here"
                                className="shadow-md placeholder:text-slate-500 text-slate-900"
                            />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="animal_id">Animal</Label>
                            <Select
                                value={formData.animal_id.toString()} // Convert number ke string
                                onValueChange={handleSelectChange} // Gunakan onValueChange dari Shadcn Select
                            >
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select Animal">
                                        {animals.find(
                                            (animal) =>
                                                animal.animal_id ===
                                                formData.animal_id
                                        )?.animal_name || "Select Animal"}
                                    </SelectValue>
                                </SelectTrigger>
                                <SelectContent className="bg-white text-slate-900">
                                    {animals.map((animal) => (
                                        <SelectItem
                                            key={animal.animal_id}
                                            value={animal.animal_id.toString()}
                                        >
                                            {animal.animal_name}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="vet_id">Doctor</Label>
                            <Select
                                value={formData.vet_id.toString()}
                                onValueChange={handleSelectTypeChange}
                            >
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select owner" />
                                </SelectTrigger>
                                <SelectContent className="bg-white text-slate-900">
                                    <SelectItem value="1">Dr. Boyke</SelectItem>
                                    <SelectItem value="2">
                                        Dr. Nurdin
                                    </SelectItem>
                                    <SelectItem value="3">Dr. Jordi</SelectItem>
                                    <SelectItem value="4">
                                        Dr. Luniko
                                    </SelectItem>
                                    <SelectItem value="5">Dr. Putri</SelectItem>
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
                        style={{ color: "white" }}
                    >
                        Save
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
