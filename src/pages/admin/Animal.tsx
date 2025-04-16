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
                <h1 className="text-4xl font-bold text-center text-slate-900">
                    Animal Management Portal
                </h1>
                <p className="mb-5 text-center text-slate-600">
                    Comprehensive overview of registered companion animals and
                    their care records.
                </p>
                <div className="w-2/3 h-full mx-auto overflow-hidden">
                    <AnimalTables animals={animals} />
                </div>
            </div>
        </AdminDashboardLayout>
    )
}
