import JobForm from "@/components/JobForm";
import Link from "next/link";

export default function NewJobPage() {
    return (
    <div>
        <JobForm />
        <Link href={"/"}>Go back Home</Link>
    </div>
)
}