import JobList from "@/components/JobList";

export default async function JobApplications() {
  
  return (
    <div className="flex flex-col flex-1 items-center justify-start font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-start justify-between py-3 px-2 md:py-8 md:px-4 dark:bg-black md:items-center">

        <JobList />

      </main>
    </div>
  );
}
