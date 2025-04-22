import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHeader,
} from "@/components/ui/table"
import { motion, AnimatePresence } from "framer-motion"
import { VisitSubmission } from "@/types/visit"
import AddVisitBtn from "./AddVisitBtn"

export default function SubmitVisitTables({
    submitVisits,
}: {
    submitVisits: VisitSubmission[]
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
            <div className="self-end">
                <AddVisitBtn />
            </div>
            <div className="w-full min-h-[200px] max-h-[65vh] overflow-y-scroll text-slate-900">
                <Table className="w-full">
                    <TableCaption>
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                        >
                            A list of Submitting Visits.
                        </motion.div>
                    </TableCaption>
                    <TableHeader>
                        <tr className="py-4 bg-slate-900">
                            <th className="w-[100px] text-white rounded-tl-lg py-2">
                                Animal
                            </th>
                            <th className="py-2 text-white">Birth Date</th>
                            <th className="py-2 text-white">Complaint</th>
                        </tr>
                    </TableHeader>
                    <TableBody className="text-center">
                        <AnimatePresence>
                            {submitVisits.map((visit, index) => (
                                <motion.tr
                                    key={visit.id}
                                    custom={index}
                                    variants={rowVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    layout="position"
                                >
                                    <TableCell className="font-medium rounded-bl-lg">
                                        {visit?.animal?.animal_name ?? "N/A"}
                                    </TableCell>
                                    <TableCell className="w-1/3">
                                        {extractDate(
                                            visit?.animal?.animal_born
                                        )}
                                    </TableCell>
                                    <TableCell>{visit.keluhan}</TableCell>
                                </motion.tr>
                            ))}
                        </AnimatePresence>
                    </TableBody>
                </Table>
            </div>
        </motion.div>
    )
}
