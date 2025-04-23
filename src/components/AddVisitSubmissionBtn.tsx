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
import { AddVisitSubmissionRequest } from "@/types/visit"
import { useCookies } from "react-cookie"
import { toast } from "@/hooks/use-toast"

export default function AddVisitSubmissionBtn() {
    const [formData, setFormData] = useState<AddVisitSubmissionRequest>({
        keluhan: "",
        id_animal: 0,
        id_owner: 0,
    })

    const navigate = useNavigate()
    const [visitSubmission, setAnimals] = useState<Animal[]>([])
    const [cookies] = useCookies(["owner_auth"])

    const owner_auth = cookies.owner_auth
    const getAllAnimals = useCallback(async () => {
        try {
            const response = await fetch(
                `http://localhost:5001/api/owner/animal`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        owner_id: owner_auth.owner_id,
                    }),
                }
            )

            const body = await response.json()

            setAnimals(body.data)
            console.log(body)
        } catch (error) {
            console.log(error)
        }
    }, [owner_auth])

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
            id_animal: parseInt(value),
        })
    }

    const handleAdd = async (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        try {
            const response = await fetch(
                "http://localhost:5001/api/owner/ajukan-visit/create",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        keluhan: formData.keluhan,
                        id_animal: formData.id_animal,
                        id_owner: owner_auth.owner_id,
                    }),
                }
            )

            const body = await response.json()

            if (body.success === false) {
                throw Error(body.message)
            }

            toast({
                title: "Sucess",
                description: "Visit added successfully",
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
                            <Label htmlFor="keluhan">Notes</Label>
                            <Input
                                onChange={handleChange}
                                id="keluhan"
                                placeholder="Add some notes here"
                                className="shadow-md placeholder:text-slate-500 text-slate-900"
                            />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="id_animal">Animal</Label>
                            <Select
                                value={formData.id_animal.toString()} // Convert number ke string
                                onValueChange={handleSelectChange} // Gunakan onValueChange dari Shadcn Select
                            >
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select Animal">
                                        {visitSubmission.find(
                                            (animal) =>
                                                animal.animal_id ===
                                                formData.id_animal
                                        )?.animal_name || "Select Animal"}
                                    </SelectValue>
                                </SelectTrigger>
                                <SelectContent className="bg-white text-slate-900">
                                    {visitSubmission.map((animal) => (
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
