import { useCallback, useEffect, useState } from "react"
import { useCookies } from "react-cookie"
import { Pet as Pets } from "@/types/pet"
import PetTables from "@/components/PetTables"
import Header from "@/components/Header"

export default function Pet() {
    const [pets, setPets] = useState<Pets[]>([])
    const [cookies] = useCookies(["auth"])
    const auth = cookies.auth
    const getAllPets = useCallback(async () => {
        try {
            const response = await fetch(
                `/api/hewan/pawrent/${auth?.id_pawrent}`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            )

            const body = await response.json()

            setPets(body.data)
            console.log(body)
        } catch (error) {
            console.log(error)
        }
    }, [auth])

    useEffect(() => {
        getAllPets()
    }, [getAllPets])
    return (
        <div>
            <Header />
            <div className="h-full mt-40">
                <div className="w-9/12 mx-auto">
                    <PetTables pets={pets} />
                </div>
            </div>
        </div>
    )
}
