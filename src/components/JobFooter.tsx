import { getJobById } from "@/services/jobService"

type JobFooterProps = {
    id: string; 
};

export default async function JobFooter({ id }: JobFooterProps) {
  const job = await getJobById(id);

   if (!job) {
    return <p>No Details</p>;
  }

  return (

    <div className="border-y-2 border-gray-400 mt-5 p-3 h-52">
        <div className="flex flex-col gap-3 text-gray-400 text-center">
            <p>Created:{job.created_at}</p>
            <p>Last Updated: {job.updated_at}</p>
            
        </div>
        <div className="flex items-ceneter gap-3 text-gray-400">
            <span className="material-symbols-outlined">work_history</span>
            <p>&copy; 2026 Job Trackr. All Rights Reserved</p>
        </div>
    </div>
  )
}
