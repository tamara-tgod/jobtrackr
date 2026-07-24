import Link from "next/link";
import JobApplications from "./jobs/page";

export default async function Home() {
  
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-10 bg-white dark:bg-black sm:items-start">
        <h1 className="text-primary text-2xl flex items-center gap-1">
          <span className="material-symbols-outlined text-3xl">work_history</span>
          JobTrackr
        </h1>
        <div className="w-72 m-auto">
          <Link href={"/jobs/new"} className="w-full flex justify-center bg-primary text-white px-3 py-1 rounded-md text-center">
            <span className="material-symbols-outlined">add</span>
            Add New Job</Link>
        </div>

     <JobApplications />

      </main>
    </div>
  );
}
