import Link from "next/link";
import JobApplications from "./jobs/page";

export default async function Home() {
  
  return (
    <div className="flex flex-col flex-1 items-center justify-center dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-start justify-between py-32 px-1 md:items-center">
      
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
