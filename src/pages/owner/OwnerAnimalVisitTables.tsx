import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHeader,
} from "@/components/ui/table"
import { motion, AnimatePresence } from "framer-motion"
import { AnimalVisit } from "@/types/visit"

export default function OwnerAnimalVisitTables({
    visits,
}: {
    visits: AnimalVisit[]
}) {
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

    const extractDate = (isoString: string) => {
        return isoString?.match(/^\d{4}-\d{2}-\d{2}/)?.[0] || isoString
    }

    return (
        <motion.div
            className="flex flex-col gap-2 overflow-hidden"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <div className="w-full min-h-[200px] max-h-[75vh] overflow-y-auto text-slate-900">
                <Table className="w-full">
                    <TableCaption>
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                        >
                            A list of your recent Animal Visit.
                        </motion.div>
                    </TableCaption>
                    <TableHeader>
                        <tr className="py-4 bg-slate-900">
                            <th className="w-[100px] text-white rounded-tl-lg py-2">
                                Date
                            </th>
                            <th className="w-[100px] text-white py-2">Notes</th>
                            <th className="px-6 py-2 text-right text-white rounded-tr-lg">
                                Animal
                            </th>
                        </tr>
                    </TableHeader>
                    <TableBody>
                        <AnimatePresence>
                            {visits.map((visit, index) => (
                                <motion.tr
                                    key={visit.visit_id}
                                    custom={index}
                                    variants={rowVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    layout="position"
                                >
                                    <TableCell className="font-medium rounded-bl-lg">
                                        {extractDate(visit.visit_date_time)}
                                    </TableCell>
                                    <TableCell className="">
                                        {visit.visit_notes}
                                    </TableCell>
                                    <TableCell className="px-6 text-right rounded-br-lg">
                                        {visit?.animal?.animal_name}
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
