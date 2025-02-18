import About from "@/components/About"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
export default function Home() {
    return (
        <div className="max-w-screen">
            <Header />
            <Hero />
            <About />
        </div>
    )
}
