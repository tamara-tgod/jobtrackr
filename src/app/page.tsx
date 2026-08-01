import AddNewJobBtn from "@/components/AddNewJobBtn";
import RecentActivity from "@/components/RecentActivity";

export default async function Home() {
  return (

    <div className="flex flex-col flex-1 dark:bg-black relative">
      {/* Greetings */}
      <div className="py-4">
        <h1 className="text-2xl font-bold">Welcome back, Itemearau!</h1>
        {/* change the hard coded value to a dynamic value */}
        <p className="text-gray-500">You have {3} active applications in progress</p>
      </div>

      {/* Application summary */}
      <div className="grid grid-cols-2 gap-3 w-full">
        <div className="bg-white flex justify-between border border-outline-variant rounded-md px-6 py-5 overflow-hidden card-shadow relative col-span-2 row-span-2">
          <div>
            <p>Active Applications</p>
            <h1 className="text-4xl text-primary">3</h1>
          </div>
          <div className="relative">
            <span className="material-symbols-outlined px-4 py-4 bg-primary/20 text-primary rounded-full">
              description
            </span>
            <div className="absolute -right-7 -bottom-9 opacity-5 rotate-12 ">
              <span
                className="material-symbols-outlined text-7xl overflow-hidden"
                style={{ fontSize: "7rem" }}
              >
                work
              </span>
            </div>
          </div>
        </div>

{/* replace these hard values with dynamic values */}
        <div className="bg-white flex flex-col gap-3 border border-outline-variant px-6 py-5 rounded-md">
          <h1>Interviews</h1>
          <p className="text-sm flex items-baseline gap-1 text-amber-700">
            <span className="text-2xl font-bold">2</span>
             Next & days</p>
        </div>
        <div className="bg-white flex flex-col gap-4 border border-outline-variant px-6 py-5 rounded-md">
          <h1>Offers</h1>
           <p className="text-sm flex items-baseline gap-1 text-secondary">
            <span className="text-2xl font-bold">1</span>
             Pending</p>
        </div>
      </div>

     <AddNewJobBtn />
      <RecentActivity />
    </div>
  );
}
