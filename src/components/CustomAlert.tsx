import { Terminal } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "./ui/alert"

export default function CustomAlert({
    title,
    description,
}: {
    title: string
    description?: string
}) {
    return (
        <Alert>
            <Terminal className="h-4 w-4" />
            <AlertTitle>{title}</AlertTitle>
            {description ?? <AlertDescription>{description}</AlertDescription>}
        </Alert>
    )
}
