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
    no_telepon_pawrent: string
}

export function Login() {
    const [, setCookie] = useCookies(["auth"])
    const [formData, setFormData] = useState<LoginRequest>({
        no_telepon_pawrent: "",
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
                `/api/pawrent/login/${formData.no_telepon_pawrent}`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            )

            const body = await response.json()

            console.log(body)

            setCookie("auth", JSON.stringify(body.data))

            navigate("/profile")
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
            className="flex items-center justify-center flex-col min-h-screen max-h-screen text-secondary text-slate-900"
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
                                className="grid w-full items-center gap-4"
                            >
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="no_telepon_pawrent">
                                        Phone
                                    </Label>
                                    <Input
                                        onChange={handleChange}
                                        id="no_telepon_pawrent"
                                        placeholder="0829110****"
                                        type="tel"
                                        className="text-slate-900 border border-slate-900 placeholder:text-slate-500"
                                    />
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="nama_lengkap_pawrent">
                                        Password
                                    </Label>
                                    <Input
                                        id="nama_lengkap_pawrent"
                                        placeholder="*****"
                                        type="password"
                                        className="text-slate-900 border border-slate-900 placeholder:text-slate-500"
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
                                    className="w-full rounded-full cursor-pointer bg-slate-900 text-white"
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
                            Don't have accout?{" "}
                            <Link to="/register" className="text-paw">
                                {" "}
                                Register
                            </Link>
                        </motion.p>
                    </CardFooter>
                </Card>
            </motion.div>
        </motion.div>
    )
}
