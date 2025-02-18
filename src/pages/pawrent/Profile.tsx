import Header from "@/components/Header"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@radix-ui/react-label"
import React, { useState } from "react"
import { useCookies } from "react-cookie"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"

interface UpdateRequest {
    id_pawrent?: string
    nama_lengkap_pawrent?: string
    no_telepon_pawrent?: string
}

export default function Profile() {
    const [cookies, setCookie, removeCookie] = useCookies(["auth"])
    const auth = cookies.auth
    const [formData, setFormData] = useState<UpdateRequest | undefined>(auth)

    const navigate = useNavigate()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            id_pawrent: auth.id_pawrent,
            [e.target.id]: e.target.value,
        })
        console.log(formData)
    }

    const handleUpdate = async (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        try {
            const response = await fetch("/api/pawrent", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            })

            const body = await response.json()

            setCookie("auth", body.data)
            console.log(body)

            navigate(0)
        } catch (error) {
            console.log(error)
        }
    }

    const handleDelete = async (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        try {
            const response = await fetch("/api/pawrent", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    id_pawrent: auth.id_pawrent,
                }),
            })

            const body = await response.json()

            removeCookie("auth")
            console.log(body)

            navigate("/")
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

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4 },
        },
    }

    return (
        <div className="max-h-screen overflow-hidden">
            <Header />
            <motion.div
                className="flex items-center justify-center min-h-screen lg:mt-10"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div variants={cardVariants} className="mx-auto">
                    <Card className="w-[430px] shadow-2xl mx-auto px-2 pb-3">
                        <CardHeader>
                            <motion.div variants={itemVariants}>
                                <CardTitle className="text-2xl font-bold">
                                    Profile
                                </CardTitle>
                            </motion.div>
                            <motion.div variants={itemVariants}>
                                <CardDescription>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit.
                                </CardDescription>
                            </motion.div>
                        </CardHeader>
                        <CardContent>
                            <motion.div
                                variants={itemVariants}
                                className="flex justify-center mb-4"
                            >
                                <Avatar className="w-24 h-24">
                                    <AvatarImage
                                        src="https://avatars.githubusercontent.com/u/145898263?v=4"
                                        alt="@shadcn"
                                    />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                            </motion.div>
                            <motion.form
                                variants={itemVariants}
                                className="space-y-4"
                            >
                                <div className="grid w-full items-center gap-4">
                                    <div className="flex flex-col space-y-1.5">
                                        <Label htmlFor="nama_lengkap_pawrent">
                                            Name
                                        </Label>
                                        <Input
                                            id="nama_lengkap_pawrent"
                                            placeholder="John Doe"
                                            defaultValue={
                                                auth?.nama_lengkap_pawrent
                                            }
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="flex flex-col space-y-1.5">
                                        <Label htmlFor="no_telepon_pawrent">
                                            Phone
                                        </Label>
                                        <Input
                                            id="no_telepon_pawrent"
                                            placeholder="0829110****"
                                            defaultValue={
                                                auth?.no_telepon_pawrent
                                            }
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <motion.div
                                    variants={itemVariants}
                                    className="flex w-full mt-4"
                                >
                                    <Button
                                        className="w-full rounded-full cursor-pointer"
                                        onClick={handleUpdate}
                                        type="submit"
                                    >
                                        Update
                                    </Button>
                                </motion.div>
                            </motion.form>
                            <motion.div
                                variants={itemVariants}
                                className="flex w-full mt-4"
                            >
                                <AlertDialog>
                                    <AlertDialogTrigger asChild>
                                        <Button
                                            className="w-full rounded-full cursor-pointer"
                                            variant={"destructive"}
                                        >
                                            Delete Account
                                        </Button>
                                    </AlertDialogTrigger>
                                    <AlertDialogContent>
                                        <AlertDialogHeader>
                                            <AlertDialogTitle>
                                                Are you absolutely sure?
                                            </AlertDialogTitle>
                                            <AlertDialogDescription>
                                                This action cannot be undone.
                                                This will permanently delete
                                                your account and remove your
                                                data from our servers.
                                            </AlertDialogDescription>
                                        </AlertDialogHeader>
                                        <AlertDialogFooter>
                                            <AlertDialogCancel className="rounded-full cursor-pointer">
                                                Cancel
                                            </AlertDialogCancel>
                                            <AlertDialogAction
                                                onClick={handleDelete}
                                                type="submit"
                                                className="rounded-full cursor-pointer"
                                            >
                                                Continue
                                            </AlertDialogAction>
                                        </AlertDialogFooter>
                                    </AlertDialogContent>
                                </AlertDialog>
                            </motion.div>
                        </CardContent>
                    </Card>
                </motion.div>
            </motion.div>
        </div>
    )
}
