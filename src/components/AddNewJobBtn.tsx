import Link from "next/link";

export default function AddNewJobBtn() {
  return (
    <div className="w-full my-6">
      <Link
        href={"/jobs/new"}
        className="w-full flex justify-center bg-primary text-white px-3 py-2 rounded-md text-center"
      >
        <span className="material-symbols-outlined">add_circle</span>
        Add New Job
      </Link>
    </div>
  );
}
