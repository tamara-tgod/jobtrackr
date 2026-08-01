import JobForm from "@/components/JobForm";
import Link from "next/link";

export default function NewJobPage() {
    return (
    <div className="mx-auto px-4 md:px-6 lg:px-8 h-16 max-w-6xl">
         <Link href={"/"} className="text-gray-500 flex items-center">
         <span className="material-symbols-outlined">arrow_left_alt</span>
         Go back Home</Link>
        <JobForm />
       
    </div>
)
}