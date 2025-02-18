import React, { useState } from "react"
import veterian from "../assets/veterinarian-taking-care-dog.jpg"
import { Button } from "./ui/button"
import { motion } from "framer-motion"

export default function Doctor() {
    const [isHovered, setIsHovered] = useState(false)

    // Container animations
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.15,
                duration: 0.6,
            },
        },
    }

    // Heading animation
    const headingVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                stiffness: 60,
                damping: 12,
            },
        },
    }

    // Content box animation
    const contentBoxVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 50,
                damping: 10,
            },
        },
        hover: {
            boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
            transition: {
                duration: 0.3,
            },
        },
    }

    // Text animation
    const textVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 0.6 },
        },
    }

    // List item animation
    const listItemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: (i: number) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: i * 0.1,
                type: "spring",
                stiffness: 70,
                damping: 10,
            },
        }),
    }

    // Image animation
    const imageVariants = {
        hidden: {
            opacity: 0,
            scale: 0.95,
            rotateY: -10,
        },
        visible: {
            opacity: 1,
            scale: 1,
            rotateY: 0,
            transition: {
                delay: 0.3,
                duration: 0.8,
                type: "spring",
                stiffness: 50,
                damping: 12,
            },
        },
        hover: {
            scale: 1.03,
            transition: {
                duration: 0.4,
                type: "spring",
                stiffness: 300,
            },
        },
    }

    // Button animation
    const buttonVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delay: 0.6,
                type: "spring",
                stiffness: 100,
                damping: 10,
            },
        },
        hover: {
            scale: 1.1,
            boxShadow: "0px 5px 10px rgba(0,0,0,0.2)",
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 10,
            },
        },
        tap: {
            scale: 0.95,
        },
    }

    return (
        <motion.div
            id="doctor"
            className="px-16 py-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={containerVariants}
        >
            <motion.h1
                className="text-4xl w-1/3 font-medium mb-10 mt-4"
                variants={headingVariants}
            >
                Our doctors provide a wide range of services, from routine
                check-ups
            </motion.h1>
            <motion.div
                className="grid grid-cols-2 gap-4 bg-paw rounded-2xl text-white"
                variants={contentBoxVariants}
                whileHover="hover"
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
            >
                <div className="flex flex-col justify-between mx-10 my-4">
                    <motion.p className="text-2xl" variants={textVariants}>
                        Our veterinarians have completed extensive training and
                        education in veterinary medicine, including a Doctor of
                        Veterinary Medicine (DVM) degree from an accredited
                        veterinary school.
                    </motion.p>
                    <div className="flex justify-between items-end">
                        <ul>
                            {[
                                "Surgeon",
                                "Dentists",
                                "Therapists",
                                "Ophthalmologists",
                            ].map((specialty, index) => (
                                <motion.li
                                    key={specialty}
                                    className="text-xl font-medium"
                                    custom={index}
                                    variants={listItemVariants}
                                    whileHover={{
                                        x: 10,
                                        transition: {
                                            type: "spring",
                                            stiffness: 300,
                                        },
                                    }}
                                >
                                    {specialty}
                                </motion.li>
                            ))}
                        </ul>
                        <motion.div
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                            className="bg-transparent"
                        >
                            <Button className="bg-white rounded-full text-secondary-foreground hover:text-white cursor-pointer">
                                Free Call
                            </Button>
                        </motion.div>
                    </div>
                </div>
                <motion.div
                    variants={imageVariants}
                    whileHover="hover"
                    style={{ overflow: "hidden", borderRadius: "1rem" }}
                >
                    <motion.img
                        src={veterian}
                        className="rounded-2xl"
                        alt="Veterian taking care dog"
                        animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
                        transition={{ duration: 0.4 }}
                    />
                </motion.div>
            </motion.div>
        </motion.div>
    )
}
