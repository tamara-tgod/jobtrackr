import NewJob from "@/components/NewJob";
import { createClient } from "@/utils/supabase/client";


export default async function Home() {

const {data: jobs, error } = await createClient()
.from("job_application")
.select("*")
.order("date_applied", {ascending: false});


if (error) {
  throw error
}


  
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-10 bg-white dark:bg-black sm:items-start">
        <h1 className="text-primary text-2xl flex items-center gap-1">
          <span className="material-symbols-outlined text-3xl">work_history</span>
          JobTrackr
        </h1>

        {jobs && jobs.length > 0 ? (
          jobs.map((job) => (
            <div key={job.id}>
              <h2>{job.job_title}</h2>
              <p>{job.company_name}</p>
              <p>{job.job_application}</p>
              <p>{job.notes}</p>
              <p>{job.job_source}</p>
            
            </div>
            
          ))
        ) : (
          <p>No job application found</p>
        )}

      </main>

      <NewJob />
    </div>
  );
}
