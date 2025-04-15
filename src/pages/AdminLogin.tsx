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
import { useState } from "react"
import { useCookies } from "react-cookie"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"

interface LoginRequest {
    username: string
    password: string
}

export function AdminLogin() {
    const [, setCookie] = useCookies(["admin_auth"])
    const [formData, setFormData] = useState<LoginRequest>({
        username: "",
        password: "",
    })
    const navigate = useNavigate()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        })
        console.log(formData)
    }

    const handleLogin = async (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        try {
            const response = await fetch(
                `http://localhost:5000/api/admin/login`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                }
            )

            const body = await response.json()

            console.log(body)

            setCookie("admin_auth", JSON.stringify(body.data))

            navigate("/dashboard")
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
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    }

    const formItemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    }

    const footerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { delay: 0.3, duration: 0.5 } },
    }

    return (
        <motion.div
            className="flex flex-col items-center justify-center max-h-screen min-h-screen text-secondary text-slate-900"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.div variants={cardVariants}>
                <Card className="w-[350px] shadow-2xl">
                    <CardHeader>
                        <motion.div variants={headerVariants}>
                            <CardTitle className="text-4xl font-bold">
                                Login
                            </CardTitle>
                        </motion.div>
                        <motion.div variants={headerVariants}>
                            <CardDescription>
                                Hello welcome back to Pawrent.
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
                                className="grid items-center w-full gap-4"
                            >
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="username">Username</Label>
                                    <Input
                                        onChange={handleChange}
                                        id="username"
                                        placeholder="username"
                                        type="text"
                                        className="border text-slate-900 border-slate-900 placeholder:text-slate-500"
                                    />
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="password">Password</Label>
                                    <Input
                                        onChange={handleChange}
                                        id="password"
                                        placeholder="*****"
                                        type="password"
                                        className="border text-slate-900 border-slate-900 placeholder:text-slate-500"
                                    />
                                </div>
                            </motion.div>
                            <motion.div
                                variants={formItemVariants}
                                className="flex w-full mt-4"
                            >
                                <Button
                                    type="submit"
                                    onClick={handleLogin}
                                    className="w-full text-white rounded-full cursor-pointer bg-slate-900"
                                >
                                    Login
                                </Button>
                            </motion.div>
                        </motion.form>
                    </CardContent>
                </Card>
            </motion.div>
        </motion.div>
    )
}
