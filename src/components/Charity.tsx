import React from "react"
import { motion } from "framer-motion"

export default function Charity() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.2,
            },
        },
    }

    const textVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 50,
                damping: 10,
            },
        },
    }

    const statsBoxVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 70,
                damping: 12,
            },
        },
        hover: {
            scale: 1.03,
            boxShadow: "0px 5px 10px rgba(0,0,0,0.2)",
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 10,
            },
        },
    }

    return (
        <motion.div
            id="charity"
            className="text-white px-16 py-8 bg-paw"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={containerVariants}
        >
            <div className="">
                <motion.h1
                    className="text-4xl w-1/3 font-medium mb-10"
                    variants={textVariants}
                >
                    We collaborate with charities around the world
                </motion.h1>
                <motion.div className="grid grid-cols-4 gap-4">
                    <motion.p
                        className="col-span-2 bg-paw-secondary px-6 py-4 rounded-xl text-lg"
                        variants={statsBoxVariants}
                        whileHover="hover"
                    >
                        Our vet clinic prioritizes community involvement and
                        animal welfare through regular charity events benefiting
                        local animal shelters, rescue organizations, and related
                        causes
                    </motion.p>
                    <motion.p
                        className="col-span-1 bg-paw-secondary px-6 py-4 rounded-xl text-lg"
                        variants={statsBoxVariants}
                        whileHover="hover"
                    >
                        <motion.span
                            className="text-4xl font-bold"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                        >
                            110+
                        </motion.span>
                        <br /> Animal saved all time
                    </motion.p>
                    <motion.p
                        className="col-span-1 bg-paw-secondary px-6 py-4 rounded-xl text-lg"
                        variants={statsBoxVariants}
                        whileHover="hover"
                    >
                        <motion.span
                            className="text-4xl font-bold"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                        >
                            64
                        </motion.span>
                        <br />
                        Charitable events held
                    </motion.p>
                </motion.div>
            </div>
        </motion.div>
    )
}
