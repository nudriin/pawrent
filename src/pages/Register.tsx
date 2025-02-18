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

export function Register() {
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
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" placeholder="John Doe" />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="phone">Phone</Label>
                                <Input id="phone" placeholder="0829110****" />
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex w-full">
                    <Button className="w-full">Register</Button>
                </CardFooter>
            </Card>
        </div>
    )
}
