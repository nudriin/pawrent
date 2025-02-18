import { Pet } from "@/types/pet"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHeader,
} from "@/components/ui/table"
import AddPetBtn from "./AddPetBtn"
import DeletePetBtn from "./DeletePetBtn"
import EditPetBtn from "./EditPetBtn"
import { motion, AnimatePresence } from "framer-motion"

export default function PetTables({ pets }: { pets: Pet[] }) {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { when: "beforeChildren", staggerChildren: 0.1 },
        },
    }

    const rowVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: (i: number) => ({
            opacity: 1,
            scale: 1,
            transition: {
                delay: i * 0.05,
                type: "spring",
                stiffness: 100,
                damping: 8,
            },
        }),
        exit: { opacity: 0, scale: 0.95, transition: { duration: 0.3 } },
    }

    return (
        <motion.div
            className="flex flex-col gap-2 overflow-hidden"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <div className="self-end">
                <AddPetBtn />
            </div>
            <div className="w-full min-h-[200px] overflow-hidden">
                <Table className="w-full">
                    <TableCaption>
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                        >
                            A list of your recent Pets.
                        </motion.div>
                    </TableCaption>
                    <TableHeader>
                        <tr className="bg-primary py-4">
                            <th className="w-[100px] text-white rounded-tl-lg py-2">
                                Name
                            </th>
                            <th className="text-white py-2">Birth Date</th>
                            <th className="text-white py-2">Pet Type</th>
                            <th className="text-right text-white rounded-tr-lg py-2 px-6">
                                Action
                            </th>
                        </tr>
                    </TableHeader>
                    <TableBody>
                        <AnimatePresence>
                            {pets.map((pet, index) => (
                                <motion.tr
                                    key={pet.id_hewan}
                                    custom={index}
                                    variants={rowVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    layout="position"
                                >
                                    <TableCell className="font-medium rounded-bl-lg">
                                        {pet.nama_hewan}
                                    </TableCell>
                                    <TableCell>
                                        {pet.tahun_lahir_hewan}
                                    </TableCell>
                                    <TableCell>{pet.jenis_hewan}</TableCell>
                                    <TableCell className="space-x-2 text-right rounded-br-lg">
                                        <EditPetBtn pet={pet} />
                                        <DeletePetBtn petId={pet.id_hewan} />
                                    </TableCell>
                                </motion.tr>
                            ))}
                        </AnimatePresence>
                    </TableBody>
                </Table>
            </div>
        </motion.div>
    )
}
