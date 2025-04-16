import { ReactNode } from "react"
import OwnerSidebar from "./OwnerSidebar"

export default function AdminDashboardLayout({
    children,
}: {
    children: ReactNode
}) {
    return (
        <>
            <div className="flex h-full gap-4">
                <div className="flex flex-col bg-white w-[16rem] rounded-2xl">
                    <OwnerSidebar />
                </div>
                <div className="w-9/12 h-full min-h-screen rounded-2xl">
                    {children}
                </div>
            </div>
        </>
    )
}
