import { useCallback, useEffect, useState } from "react"
import { Visit as Visits } from "@/types/visit"
import AdminDashboardLayout from "@/components/AdminDashboardLayout"
import VisitTables from "@/components/VisitTables"

export default function Visit() {
    const [visits, setVisits] = useState<Visits[]>([])
    const getAllVisits = useCallback(async () => {
        try {
            const response = await fetch(
                `http://localhost:5000/api/admin/visit`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            )

            const body = await response.json()

            setVisits(body.data)
            console.log(body)
        } catch (error) {
            console.log(error)
        }
    }, [])

    useEffect(() => {
        getAllVisits()
    }, [getAllVisits])
    return (
        <AdminDashboardLayout>
            <div className="h-full pt-10">
                <div className="w-9/12 h-full mx-auto">
                    <VisitTables visits={visits} />
                </div>
            </div>
        </AdminDashboardLayout>
    )
}
