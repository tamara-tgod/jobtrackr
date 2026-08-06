import JobDetails from "@/components/JobDetails";
import JobFooter from "@/components/JobFooter";
import { getJobById } from "@/services/jobService";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function JobPage({ params }: PageProps) {

  const { id } = await params;
  const job = await getJobById(id);

  if (!job) {
    return <p>Job not found</p>;
  }

  return (
    <div>
      <JobDetails job={job} id={id} />
         <JobFooter id={id}/>
    </div>
  );
}
