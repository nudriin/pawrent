import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"

interface RegisterRequest {
    username: string
    password: string
    owner_givenname: string
    owner_familyname: string
    owner_address: string
    owner_phone: string
}

export function OwnerRegister() {
    const [formData, setFormData] = useState<RegisterRequest>({
        username: "",
        password: "",
        owner_givenname: "",
        owner_familyname: "",
        owner_address: "",
        owner_phone: "",
    })
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
            const response = await fetch(
                `http://localhost:5001/api/owner/register`,
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

            navigate("/owner")
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

    return (
        <motion.div
            className="flex flex-col items-center justify-center min-h-screen text-secondary text-slate-900"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.div variants={cardVariants}>
                <Card className="w-[450px] shadow-2xl">
                    <CardHeader>
                        <motion.div variants={headerVariants}>
                            <CardTitle className="text-4xl font-bold text-paw">
                                Register
                            </CardTitle>
                        </motion.div>
                        <motion.div variants={headerVariants}>
                            <CardDescription className="text-paw-secondary">
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
                                <div className="flex">
                                    <div className="flex flex-col space-y-1.5 text-paw-secondary">
                                        <Label htmlFor="owner_givenname">
                                            First Name
                                        </Label>
                                        <Input
                                            onChange={handleChange}
                                            id="owner_givenname"
                                            placeholder="First Name"
                                            type="text"
                                            className="border border-slate-900 text-paw-secondary placeholder:text-paw-secondary"
                                        />
                                    </div>
                                    <div className="flex flex-col space-y-1.5 text-paw-secondary">
                                        <Label htmlFor="owner_familyname">
                                            Last Name
                                        </Label>
                                        <Input
                                            onChange={handleChange}
                                            id="owner_familyname"
                                            placeholder="Last Name"
                                            type="text"
                                            className="border border-slate-900 text-paw-secondary placeholder:text-paw-secondary"
                                        />
                                    </div>
                                </div>
                                <div className="flex"></div>
                                <div className="flex flex-col space-y-1.5 text-paw-secondary">
                                    <Label htmlFor="username">Username</Label>
                                    <Input
                                        onChange={handleChange}
                                        id="username"
                                        placeholder="Username"
                                        type="text"
                                        className="border border-slate-900 text-paw-secondary placeholder:text-paw-secondary"
                                    />
                                </div>
                                <div className="flex flex-col space-y-1.5 text-paw-secondary">
                                    <Label htmlFor="password">Password</Label>
                                    <Input
                                        onChange={handleChange}
                                        id="password"
                                        placeholder="*****"
                                        type="password"
                                        className="border border-slate-900 text-paw-secondary placeholder:text-paw-secondary"
                                    />
                                </div>
                                <div className="flex flex-col space-y-1.5 text-paw-secondary">
                                    <Label htmlFor="owner_address">
                                        Address
                                    </Label>
                                    <Input
                                        onChange={handleChange}
                                        id="owner_address"
                                        placeholder="Address"
                                        type="text"
                                        className="border border-slate-900 text-paw-secondary placeholder:text-paw-secondary"
                                    />
                                </div>
                                <div className="flex flex-col space-y-1.5 text-paw-secondary">
                                    <Label htmlFor="owner_phone">Phone</Label>
                                    <Input
                                        onChange={handleChange}
                                        id="owner_phone"
                                        placeholder="Phone"
                                        type="text"
                                        className="border border-slate-900 text-paw-secondary placeholder:text-paw-secondary"
                                    />
                                </div>
                            </motion.div>
                            <motion.div
                                variants={formItemVariants}
                                className="flex w-full mt-4"
                            >
                                <Button
                                    type="submit"
                                    onClick={handleRegister}
                                    className="w-full text-white rounded-full cursor-pointer bg-paw"
                                >
                                    Register
                                </Button>
                            </motion.div>
                        </motion.form>
                    </CardContent>
                </Card>
            </motion.div>
        </motion.div>
    )
}
