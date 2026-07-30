import JobFooter from "@/components/JobFooter";
import { getJobById } from "@/services/jobService";
import { Job } from "@/types/job";
import Link from "next/link";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

type ApplicationStatus = Job["application_status"];

const statusStyles: Record<ApplicationStatus, string> = {
  applied: "bg-green-100 text-green-800",
  interview: "bg-yellow-100 text-yellow-800",
  offer: "bg-green-100 text-green-800",
  rejected: "bg-red-100 text-red-800",
  withdrawn: "bg-orange-100 text-orange-800",
  "no response": "bg-gray-100 text-gray-700",
};

export default async function JobPage({ params }: PageProps) {
  const { id } = await params;
  const job = await getJobById(id);

  if (!job) {
    return <p>Job not found</p>;
  }

  return (
    <div className="flex flex-col gap-4 max-w-4xl w-full mx-auto px-4 py-6">
       <Link href={"/"} className="flex text-gray-400 ">
          <span className="material-symbols-outlined">arrow_left_alt</span>
          Back to Board
        </Link>
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl">{job.job_title}</h1>
        <div className="flex flex-wrap items-center gap-2">
          <p className="flex items-center">
            <span className="material-symbols-outlined text-primary/20">
              apartment
            </span>
            {job.company_name}
          </p>
          <p className={`px-3 py-1 rounded-full ${statusStyles[job.application_status]}`}
          >
            {job.application_status}
          </p>
        </div>
        <div className="mt-2">
          <button className="flex border border-gray-400 py-2 px-4 rounded-md bg-white items-center text-sm sm:text-base">
            <span className="material-symbols-outlined">edit</span>
            Edit</button>
        </div>

        <div className="border border-gray-400 bg-white p-3 flex flex-col gap-2 rounded-md">
          <h3 className="text-xl">Notes</h3>
         <p>{job.notes}</p>
        </div>
        <div className="border border-gray-400 bg-white p-3  gap-4 rounded-md">
          <ul className="flex flex-col gap-3">
            <li className="flex items-start sm:items-center gap-4">
              <span className="material-symbols-outlined text-primary p-3 bg-primary/20 rounded-md">event</span>
              <div>
                <h4 className="text-sm text-gray-400">Applied On</h4>
                <p className="text-sm">{job.date_applied}</p>
              </div>
            </li>
            <li className="flex items-start sm:items-center gap-4">
              <span className="material-symbols-outlined text-primary p-3 bg-primary/20 rounded-md">open_in_new</span>
              <div>
                <h4 className="text-sm text-gray-400">Job Link</h4>
                <p className="text-sm">{job.job_url ?? "No Link"}</p>
              </div>
            </li>
            <li className="flex items-start sm:items-center gap-4">
                <span className="material-symbols-outlined text-primary p-3 bg-primary/20 rounded-md">topic</span>
                <div>
                  <h4 className="text-sm text-gray-400">Job Source</h4>
                    <p className="text-sm">{job.job_source ?? "Nil"}</p>
                </div>
            
            </li>
            <li className="flex items-start sm:items-center gap-4">
               <span className="material-symbols-outlined text-primary p-3 bg-primary/20 rounded-md">topic</span>
               <div>
                <h4 className="text-sm text-gray-400">Follow Up Date</h4>
                <p>{job.follow_up_date}</p>
               </div>
              
            </li>
          </ul>
        </div>
      </div>
      <JobFooter params={params} />
    </div>
  );
}
