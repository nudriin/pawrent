import { useCookies } from "react-cookie"
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
import { PetAddRequest } from "@/types/pet"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function AddPetBtn() {
    const [cookies] = useCookies(["auth"])
    const auth = cookies.auth
    const [formData, setFormData] = useState<PetAddRequest>({
        nama_hewan: "Putri",
        tahun_lahir_hewan: "2020",
        jenis_hewan: "Kucing",
        id_pawrent: "qHN789tyfKDckDhhcS0X8",
    })
    const navigate = useNavigate()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
            id_pawrent: auth.id_pawrent as string,
        })
        console.log(formData)
    }

    const handleAdd = async (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        try {
            const response = await fetch("/api/hewan", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            })

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
                <Button className="flex items-center justify-center h-full gap-2 group hover:border-primary hover:cursor-pointer text-secondary rounded-full">
                    <p className="font-semibold">Add Pet</p>
                </Button>
            </DialogTrigger>
            <DialogContent>
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
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="nama_hewan">Name</Label>
                            <Input
                                onChange={handleChange}
                                id="nama_hewan"
                                placeholder="Chiko"
                            />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="tahun_lahir_hewan">
                                Birth Date
                            </Label>
                            <Input
                                onChange={handleChange}
                                id="tahun_lahir_hewan"
                                placeholder="2025"
                                type="text"
                            />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="jenis_hewan">Pet Type</Label>
                            <Input
                                onChange={handleChange}
                                id="jenis_hewan"
                                placeholder="Duelist"
                                type="text"
                            />
                        </div>
                    </div>
                </form>
                <DialogFooter>
                    <Button
                        onClick={handleAdd}
                        className="w-full text-secondary rounded-full cursor-pointer"
                        type="submit"
                    >
                        Save
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
