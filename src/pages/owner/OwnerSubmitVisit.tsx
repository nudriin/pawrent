import { useCallback, useEffect, useState } from "react"
import { VisitSubmission } from "@/types/visit"
import OwnerDashboardLayout from "@/components/OwnerDashboardLayout"
import { useCookies } from "react-cookie"
import SubmitVisitTables from "@/components/SubmitVisitTables"

export default function OwnerSubmitVisit() {
    const [submitVisits, setVisits] = useState<VisitSubmission[]>([])
    const [cookies] = useCookies(["owner_auth"])

    const owner_auth = cookies.owner_auth
    const getAllSubmitVisit = useCallback(async () => {
        try {
            const response = await fetch(
                `http://localhost:5001/api/owner/ajukan-visit`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        id_owner: owner_auth.owner_id,
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
        getAllSubmitVisit()
    }, [getAllSubmitVisit])
    return (
        <OwnerDashboardLayout>
            <div className="h-full pt-10">
                <h1 className="text-4xl font-bold text-center text-slate-900">
                    Visit Submission Portal
                </h1>
                <p className="mb-5 text-center text-slate-600">
                    Track all veterinary visit submissions, appointments, and
                    treatment records for pets.
                </p>
                <div className="w-2/3 h-full mx-auto overflow-hidden">
                    <SubmitVisitTables submitVisits={submitVisits} />
                </div>
            </div>
        </OwnerDashboardLayout>
    )
}
