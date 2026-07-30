import { getJobs } from "@/services/jobService";
import JobCard from "./JobCard";


export default async function JobList() {
    const jobs = await getJobs()
    return (
        <div className="w-full m-auto">
            <div className="py-4 px-1 grid grid-cols-1 md:grid-cols-2 gap-4
            ">
                {
                jobs && jobs.length > 0 ? (
                jobs.map((job) => (
                   <JobCard
                   key={job.id}
                   job={job}
                   />
                ))
             ) : (
              <p>No job application found</p>
            ) }
            </div>
        </div>
    )
}