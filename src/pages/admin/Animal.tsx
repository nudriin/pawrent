import { useCallback, useEffect, useState } from "react"
import { Animal as Animals } from "@/types/animal"
import AnimalTables from "@/components/AnimalTables"
import AdminDashboardLayout from "@/components/AdminDashboardLayout"

export default function Animal() {
    const [animals, setAnimals] = useState<Animals[]>([])
    const getAllPets = useCallback(async () => {
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
        getAllPets()
    }, [getAllPets])
    return (
        <AdminDashboardLayout>
            <div className="h-full pt-10">
                <div className="w-1/2 h-full mx-auto overflow-hidden">
                    <AnimalTables animals={animals} />
                </div>
            </div>
        </AdminDashboardLayout>
    )
}
