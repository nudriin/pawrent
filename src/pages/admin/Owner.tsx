import { useCallback, useEffect, useState } from "react"
import { Owner as Owners } from "@/types/owner"
import AdminDashboardLayout from "@/components/AdminDashboardLayout"
import OwnerTables from "@/components/OwnerTables"

export default function Owner() {
    const [owners, setOwners] = useState<Owners[]>([])
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
    return (
        <AdminDashboardLayout>
            <div className="h-full pt-10">
                <div className="w-9/12 h-full mx-auto">
                    <OwnerTables owners={owners} />
                </div>
            </div>
        </AdminDashboardLayout>
    )
}
