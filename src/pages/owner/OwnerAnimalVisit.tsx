import { useCallback, useEffect, useState } from "react"
import { AnimalVisit } from "@/types/visit"
import OwnerDashboardLayout from "@/components/OwnerDashboardLayout"
import { useCookies } from "react-cookie"
import OwnerAnimalVisitTables from "./OwnerAnimalVisitTables"

export default function OwnerAnimalVisit() {
    const [visits, setVisits] = useState<AnimalVisit[]>([])
    const [cookies] = useCookies(["owner_auth"])

    const owner_auth = cookies.owner_auth
    const getAllPets = useCallback(async () => {
        try {
            const response = await fetch(
                `http://localhost:5001/api/owner/visit`,
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

            setVisits(body.data)
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
                    Visit Portal
                </h1>
                <p className="mb-5 text-center text-slate-600">
                    Track all veterinary visits, appointments, and treatment
                    records for pets.
                </p>
                <div className="w-2/3 h-full mx-auto overflow-hidden">
                    <OwnerAnimalVisitTables visits={visits} />
                </div>
            </div>
        </OwnerDashboardLayout>
    )
}
