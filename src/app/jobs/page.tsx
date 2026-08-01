import JobList from "@/components/JobList";
import Link from "next/link";

export default async function JobApplications() {
  
  return (
      <div className="flex flex-col dark:bg-black">
        <header>
          <Link href={"/"} className="text-gray-500 flex">
          <span className="material-symbols-outlined">arrow_left_alt</span>
          Back to Dashboard</Link>
        </header>
      <main className="flex flex-1 w-full max-w-3xl flex-col items-start justify-between py-32 px-1 md:items-center">

     <JobList />

      </main>
    </div>
  );
}
