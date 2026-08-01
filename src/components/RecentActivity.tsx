import Link from "next/link"
import { getJobs } from "@/services/jobService"
import JobCard from "./JobCard"

export default async function RecentActivity() {
    const jobs = await getJobs()
    const latestJobs = jobs.slice(0, 4)

    return (
        <div>
            {/* header */}
            <div className="flex justify-between my-3">
                <h1 className="text-xl font-bold">Recent Activity</h1>
                <Link href={"/jobs/"} className="text-primary">View all</Link>
            </div>

            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                {latestJobs.map((job) => (
                    <JobCard key={job.id} job={job}/>
                ))}
            </div>
        </div>
    )
}