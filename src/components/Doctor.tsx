import veterian from "../assets/veterinarian-taking-care-dog.jpg"
import { Button } from "./ui/button"
export default function Doctor() {
    return (
        <div id="doctor" className="px-16 py-8">
            <h1 className="text-4xl w-1/3 font-medium mb-10 mt-4">
                Our doctors provide a wide range of services, from routine
                check-ups
            </h1>
            <div className="grid grid-cols-2 gap-4 bg-paw rounded-2xl text-white">
                <div className="flex flex-col justify-between mx-10 my-4">
                    <p className="text-2xl">
                        Our veterinarians have completed extensive training and
                        education in veterinary medicine, including a Doctor of
                        Veterinary Medicine (DVM) degree from an accredited
                        veterinary school.
                    </p>
                    <div className="flex justify-between items-end">
                        <ul>
                            <li className="text-xl font-medium">Surgeon</li>
                            <li className="text-xl font-medium">Dentists</li>
                            <li className="text-xl font-medium">Therapists</li>
                            <li className="text-xl font-medium">
                                Ophthalmologists
                            </li>
                        </ul>
                        <Button className="bg-white rounded-full text-secondary-foreground hover:text-white cursor-pointer">
                            Free Call
                        </Button>
                    </div>
                </div>
                <img
                    src={veterian}
                    className="rounded-2xl"
                    alt="Veterian taking care dog"
                />
            </div>
        </div>
    )
}
