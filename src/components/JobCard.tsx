import { Job } from "@/types/job";
import Link from "next/link";

interface JobCardProps {
  job: Job;
}

type ApplicationStatus = Job["application_status"];

const statusStyles: Record<ApplicationStatus, string> = {
  applied: "bg-green-100 text-green-800",
  interview: "bg-yellow-100 text-yellow-800",
  offer: "bg-green-100 text-green-800",
  rejected: "bg-red-100 text-red-800",
  withdrawn: "bg-orange-100 text-orange-800",
  "no response": "bg-gray-100 text-gray-700",
};

export default function JobCard({ job }: JobCardProps) {
  return (
    <Link
      href={`/jobs/${job.id}`}
      className="border border-gray-400 px-2 w-full h-24 m-auto rounded-md bg-white flex items-center justify-between"
    >
      <div className="py-2 px-3 wrap-break w-60 flex flex-col gap-1">
        <h2 className="font-semibold text-sm"> {job.company_name}</h2>
        <p className="text-xs text-gray-600 dark:text-gray-300">
          {job.job_title}
        </p>
        <p className="text-xs">Applied {job.date_applied}</p>
      </div>
      <div className="w-20">
        <p
          className={`px-2 py-1.5 rounded-full text-sm text-center ${statusStyles[job.application_status]}`}
        >
          {job.application_status}
        </p>
      </div>
    </Link>
  );
}
