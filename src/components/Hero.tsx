import dog from "../assets/dog.png"
import cat2 from "../assets/cat2.png"
import { Button } from "./ui/button"
import { Link } from "react-router-dom"
import { motion } from "framer-motion" // Fixed import

export default function Hero() {
    return (
        <div
            id="home"
            className="min-h-screen flex items-center justify-center text-primary max-h-screen flex-col relative overflow-hidden"
        >
            <motion.h1
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.6,
                    scale: { type: "spring", stiffness: 100, damping: 10 },
                }}
                className="text-7xl font-bold mb-3 w-2/4 text-center"
            >
                Pawrent.
            </motion.h1>
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.5,
                    y: { type: "spring", stiffness: 80 },
                }}
                className="text-xl font-medium mb-5 w-2/4 text-center"
            >
                Private vet clinic management solutions
            </motion.h1>
            <Link to="/pet" className="cursor-pointer">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                >
                    <Button
                        className="py-5 z-10 rounded-full ring ring-paw hover:text-primary"
                        variant={"ghost"}
                    >
                        Get Started
                    </Button>
                </motion.div>
            </Link>
            <motion.img
                initial={{ x: -300, opacity: 0 }}
                animate={{ x: -160, opacity: 0.3 }}
                transition={{
                    delay: 0.8,
                    duration: 0.8,
                    x: { type: "spring", stiffness: 60, damping: 14 },
                }}
                src={dog}
                width={900}
                alt="Dog"
                className="absolute left-[-90px] bottom-[-90px]"
                style={{ opacity: 0.3 }}
            />
            <motion.img
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: -60, opacity: 0.3 }}
                transition={{
                    delay: 1,
                    duration: 0.8,
                    x: { type: "spring", stiffness: 60, damping: 14 },
                }}
                src={cat2}
                width={700}
                alt="Cat"
                className="absolute right-[-180px] top-[5px]"
                style={{ opacity: 0.3 }}
            />
        </div>
    )
}
