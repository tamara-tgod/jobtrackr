import { Job } from "@/types/job";
import Link from "next/link";

interface JobCardProps {
  job: Job;
}

export default function JobCard({ job }: JobCardProps) {
  return (
    <Link href={"/"}>
      <div className="border rounded-md">
        <h2>{job.job_title}</h2>
        <p>{job.company_name}</p>
        <p>{job.date_applied}</p>
        <p>{job.application_status}</p>
        <p>{job.notes}</p>
        <p>{job.job_source}</p>
        <p>{job.job_url}</p>
      </div>
    </Link>
  );
}
