import Charity from "@/components/Charity"
import Doctor from "@/components/Doctor"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
export default function Home() {
    return (
        <div className="max-w-screen">
            <Header />
            <Hero />
            <Charity />
            <Doctor />
        </div>
    )
}
