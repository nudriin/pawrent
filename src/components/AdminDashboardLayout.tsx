import { ReactNode } from "react"
import AdminSidebar from "./AdminSidebar"

export default function AdminDashboardLayout({
    children,
}: {
    children: ReactNode
}) {
    return (
        <>
            <div className="flex h-full gap-4">
                <div className="flex flex-col bg-white w-[16rem] rounded-2xl">
                    <AdminSidebar />
                </div>
                <div className="w-9/12 h-full max-h-screen min-h-screen overflow-hidden rounded-2xl">
                    {children}
                </div>
            </div>
        </>
    )
}
