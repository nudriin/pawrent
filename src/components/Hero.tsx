import dog from "../assets/dog.png"
import cat2 from "../assets/cat2.png"
import { Button } from "./ui/button"
import { Link } from "react-router-dom"
import { motion } from "framer-motion" // Fixed import

export default function Hero() {
    return (
        <div
            id="home"
            className="absolute z-10 flex flex-col items-center justify-center w-full max-h-screen min-h-screen overflow-hidden text-primary"
        >
            <motion.h1
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.6,
                    scale: { type: "spring", stiffness: 100, damping: 10 },
                }}
                className="w-2/4 mb-3 font-bold text-center text-7xl text-paw"
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
                className="w-2/4 mb-5 text-xl font-medium text-center text-paw"
            >
                Private vet clinic management solutions
            </motion.h1>
            <Link to="/auth/owner" className="cursor-pointer">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                >
                    <Button
                        className="z-10 py-5 border rounded-full border-paw hover:text-primary text-paw"
                        variant={"ghost"}
                    >
                        Get Started
                    </Button>
                </motion.div>
            </Link>
        </div>
    )
}
