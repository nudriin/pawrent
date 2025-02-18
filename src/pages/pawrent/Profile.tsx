import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
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
import { Label } from "@radix-ui/react-label"

export default function Profile() {
    return (
        <div className="flex items-center justify-between min-h-screen">
            <Card className="w-[430px] shadow-2xl mx-auto px-2 pb-3">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold">
                        Profile
                    </CardTitle>
                    <CardDescription>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </CardDescription>
                </CardHeader>
                <CardContent className="">
                    <Avatar className="mx-auto w-24 h-24">
                        <AvatarImage
                            src="https://avatars.githubusercontent.com/u/145898263?v=4"
                            alt="@shadcn"
                        />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
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
                    <Button className="w-full">Update</Button>
                </CardFooter>
            </Card>
        </div>
    )
}
