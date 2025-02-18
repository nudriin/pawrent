import { Pet } from "@/types/pet"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from "./ui/button"
import AddPetBtn from "./AddPetBtn"

export default function PetTables({ pets }: { pets: Pet[] }) {
    return (
        <div className="flex flex-col gap-2">
            <div className="self-end">
                <AddPetBtn />
            </div>
            <Table className="">
                <TableCaption>A list of your recent Pets.</TableCaption>
                <TableHeader className="hover:text-primary">
                    <TableRow className="bg-primary ">
                        <TableHead className="w-[100px] text-white rounded-tl-lg hover:text-primary">
                            Name
                        </TableHead>
                        <TableHead className="text-white hover:text-primary">
                            Birth Date
                        </TableHead>
                        <TableHead className="text-white hover:text-primary">
                            Pet Type
                        </TableHead>
                        <TableHead className="text-right text-white rounded-tr-lg hover:text-primary">
                            Action
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {pets.map((pet) => (
                        <TableRow key={pet.id_hewan}>
                            <TableCell className="font-medium rounded-bl-lg">
                                {pet.nama_hewan}
                            </TableCell>
                            <TableCell>{pet.tahun_lahir_hewan}</TableCell>
                            <TableCell>{pet.jenis_hewan}</TableCell>
                            <TableCell className="space-x-2 text-right rounded-br-lg">
                                <Button>Edit</Button>
                                <Button variant={"destructive"}>Delete</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}
