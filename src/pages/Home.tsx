import Charity from "@/components/Charity"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
export default function Home() {
    return (
        <div className="max-w-screen">
            <Header />
            <Hero />
            <Charity />
        </div>
    )
}
