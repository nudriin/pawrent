import dog from "../assets/dog.png"
import cat2 from "../assets/cat2.png"
import { Button } from "./ui/button"
export default function Hero() {
    return (
        <div
            id="home"
            className="min-h-screen flex items-center justify-center text-primary max-h-screen flex-col relative overflow-hidden "
        >
            <h1 className="text-7xl font-bold mb-3 w-2/4 text-center">
                Pawrent.
            </h1>
            <h1 className="text-xl font-medium mb-5 w-2/4 text-center">
                Private vet clinic management solutions
            </h1>
            <Button
                className="cursor-pointer py-5 rounded-full ring ring-paw hover:text-primary"
                variant={"ghost"}
            >
                Get Started
            </Button>
            <img
                src={dog}
                width={900}
                alt="Dog"
                className="absolute left-[-160px] bottom-[-50px] opacity-30"
            />
            <img
                src={cat2}
                width={700}
                alt="Cat"
                className="absolute right-[-60px] top-[5px] opacity-30"
            />
        </div>
    )
}
