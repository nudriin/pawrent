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
import { useNavigate } from "react-router-dom"

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

    return (
        <div className="flex items-center justify-center flex-col min-h-screen max-h-screen">
            <Card className="w-[350px] shadow-2xl">
                <CardHeader>
                    <CardTitle>Register</CardTitle>
                    <CardDescription>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="grid w-full items-center gap-4">
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
                                <Input id="password" placeholder="*****" />
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex w-full">
                    <Button onClick={handleRegister} className="w-full">
                        Register
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}
