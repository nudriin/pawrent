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
import { useCookies } from "react-cookie"
import { useNavigate } from "react-router-dom"

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

    return (
        <div className="flex items-center justify-center flex-col min-h-screen max-h-screen">
            <Card className="w-[350px] shadow-2xl">
                <CardHeader>
                    <CardTitle>Login</CardTitle>
                    <CardDescription>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="grid w-full items-center gap-4">
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
                                <Label htmlFor="nama_lengkap_pawrent">
                                    Password
                                </Label>
                                <Input
                                    id="nama_lengkap_pawrent"
                                    placeholder="*****"
                                    type="password"
                                />
                            </div>
                        </div>
                        <div className="flex w-full mt-4">
                            <Button
                                type="submit"
                                onClick={handleLogin}
                                className="w-full"
                            >
                                Login
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
