import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { motion } from "framer-motion"

export function Register() {
    const [formData, setFormData] = useState({})
    const navigate = useNavigate()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        })
        console.log(formData)
    }

    const handleRegister = async (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        try {
            const response = await fetch("/api/pawrent", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            })

            const body = await response.json()
            console.log(body)
            navigate("/login")
        } catch (error) {
            console.log(error)
        }
    }

    // Variants untuk animasi
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                when: "beforeChildren",
            },
        },
    }

    const cardVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.5, ease: "easeOut" },
        },
    }

    const headerVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.5 },
        },
    }

    const formItemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4 },
        },
    }

    const footerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { delay: 0.3, duration: 0.5 },
        },
    }

    return (
        <motion.div
            className="flex items-center justify-center flex-col min-h-screen max-h-screen"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.div variants={cardVariants}>
                <Card className="w-[350px] shadow-2xl">
                    <CardHeader>
                        <motion.div variants={headerVariants}>
                            <CardTitle className="text-4xl font-bold">
                                Register
                            </CardTitle>
                        </motion.div>
                        <motion.div variants={headerVariants}>
                            <CardDescription>
                                Hello welcome to Pawrent.
                            </CardDescription>
                        </motion.div>
                    </CardHeader>
                    <CardContent>
                        <motion.form
                            onSubmit={(e) => e.preventDefault()}
                            initial="hidden"
                            animate="visible"
                            className="space-y-4"
                        >
                            <motion.div
                                variants={formItemVariants}
                                className="grid w-full items-center gap-4"
                            >
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="nama_lengkap_pawrent">
                                        Name
                                    </Label>
                                    <Input
                                        onChange={handleChange}
                                        id="nama_lengkap_pawrent"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="no_telepon_pawrent">
                                        Phone
                                    </Label>
                                    <Input
                                        onChange={handleChange}
                                        id="no_telepon_pawrent"
                                        placeholder="0829110****"
                                        type="tel"
                                    />
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="password">Password</Label>
                                    <Input
                                        id="password"
                                        placeholder="*****"
                                        type="password"
                                    />
                                </div>
                            </motion.div>
                            <motion.div
                                variants={formItemVariants}
                                className="flex w-full mt-4"
                            >
                                {/* Jika Button tidak support motion props, bisa dibungkus dengan motion.div */}
                                <Button
                                    type="submit"
                                    onClick={handleRegister}
                                    className="w-full rounded-full cursor-pointer"
                                >
                                    Register
                                </Button>
                            </motion.div>
                        </motion.form>
                    </CardContent>
                    <CardFooter>
                        <motion.p
                            variants={footerVariants}
                            className="text-muted-foreground"
                        >
                            Have an account?{" "}
                            <Link to="/login" className="text-paw">
                                Login
                            </Link>
                        </motion.p>
                    </CardFooter>
                </Card>
            </motion.div>
        </motion.div>
    )
}
