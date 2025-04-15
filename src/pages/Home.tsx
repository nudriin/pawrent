import Charity from "@/components/Charity"
import Doctor from "@/components/Doctor"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import ThreeHero from "@/components/ThreeHero"
import { motion, useScroll } from "motion/react"
export default function Home() {
    const { scrollYProgress } = useScroll()
    return (
        <>
            <motion.div
                className="max-w-screen bg-white"
                id="scroll-indicator"
                style={{
                    scaleX: scrollYProgress,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 8,
                    originX: 0,
                    backgroundColor: "#183dff",
                }}
            />

            <Header />
            <Hero />
            <ThreeHero />
            <Charity />
            <Doctor />
            <Footer />
        </>
    )
}
