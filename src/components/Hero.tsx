import dog from "../assets/dog.png"
import cat2 from "../assets/cat2.png"
import { Button } from "./ui/button"
import { Link } from "react-router-dom"
import { motion } from "framer-motion" // Fixed import

export default function Hero() {
    return (
        <div
            id="home"
            className="z-10 absolute min-h-screen flex items-center justify-center text-primary max-h-screen flex-col overflow-hidden w-full"
        >
            <motion.h1
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.6,
                    scale: { type: "spring", stiffness: 100, damping: 10 },
                }}
                className="text-7xl font-bold mb-3 w-2/4 text-center text-paw"
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
                className="text-xl font-medium mb-5 w-2/4 text-center text-paw"
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
                        className="py-5 z-10 rounded-full border border-paw hover:text-primary text-paw"
                        variant={"ghost"}
                    >
                        Get Started
                    </Button>
                </motion.div>
            </Link>
        </div>
    )
}
