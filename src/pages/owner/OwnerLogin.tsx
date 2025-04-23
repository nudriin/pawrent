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
import { Link, useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { toast } from "@/hooks/use-toast"

interface LoginRequest {
    username: string
    password: string
}

export function OwnerLogin() {
    const [, setCookie] = useCookies(["owner_auth"])
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
                `http://localhost:5001/api/owner/login`,
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

            if (body.success === false) {
                throw Error(body.message)
            }

            setCookie("owner_auth", JSON.stringify(body.data))
            toast({
                title: "Sukses",
                description: "Login berhasil",
                style: {
                    backgroundColor: "#183dff",
                    color: "#fff",
                },
            })

            navigate("/owner/animals")
        } catch (error) {
            console.log(error)
            toast({
                title: "Error",
                description: `${error}`,
                style: {
                    backgroundColor: "#f54260",
                    color: "#fff",
                },
            })
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
                            <CardTitle className="text-4xl font-bold text-slate-900">
                                Owner Login
                            </CardTitle>
                        </motion.div>
                        <motion.div variants={headerVariants}>
                            <CardDescription className="text-slate-700">
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
                                <div className="flex flex-col space-y-1.5 text-slate-900">
                                    <Label htmlFor="username">Username</Label>
                                    <Input
                                        onChange={handleChange}
                                        id="username"
                                        placeholder="Username"
                                        type="text"
                                        className="border border-slate-900 text-slate-900 placeholder:text-slate-900"
                                        style={{
                                            border: "1px solid #171717",
                                        }}
                                    />
                                </div>
                                <div className="flex flex-col space-y-1.5 text-slate-900">
                                    <Label htmlFor="password">Password</Label>
                                    <Input
                                        onChange={handleChange}
                                        id="password"
                                        placeholder="*****"
                                        type="password"
                                        className="border border-slate-900 text-slate-900 placeholder:text-slate-900"
                                        style={{
                                            border: "1px solid #171717",
                                        }}
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
                                    className="w-full text-white rounded-full cursor-pointer bg-slate-900 hover:bg-slate-700"
                                >
                                    Login
                                </Button>
                            </motion.div>
                        </motion.form>
                    </CardContent>
                    <CardFooter>
                        <motion.p
                            variants={footerVariants}
                            className="text-slate-500"
                        >
                            An Admin?{" "}
                            <Link to="/auth" className="text-paw">
                                {" "}
                                Admin Login
                            </Link>
                        </motion.p>
                    </CardFooter>
                </Card>
            </motion.div>
        </motion.div>
    )
}
