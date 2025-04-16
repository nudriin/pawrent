import { useCallback, useEffect, useState } from "react"
import { Animal as Animals } from "@/types/animal"
import OwnerDashboardLayout from "@/components/OwnerDashboardLayout"
import { useCookies } from "react-cookie"
import OwnerAnimalTables from "./OwnerAnimalTables"

export default function OwnerAnimal() {
    const [animals, setAnimals] = useState<Animals[]>([])
    const [cookies] = useCookies(["owner_auth"])

    const owner_auth = cookies.owner_auth
    const getAllPets = useCallback(async () => {
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
        getAllPets()
    }, [getAllPets])
    return (
        <OwnerDashboardLayout>
            <div className="h-full pt-10">
                <h1 className="text-4xl font-bold text-center text-slate-900">
                    Animal Portal
                </h1>
                <p className="mb-5 text-center text-slate-600">
                    Comprehensive overview of registered companion animals and
                    their care records.
                </p>
                <div className="w-2/3 h-full mx-auto overflow-hidden">
                    <OwnerAnimalTables animals={animals} />
                </div>
            </div>
        </OwnerDashboardLayout>
    )
}
