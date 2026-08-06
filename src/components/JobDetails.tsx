"use client";
import { Job } from "@/types/job";
import { useState } from "react";
import Link from "next/link";
import StatusDropdown from "./StatusDropdown";
import { updateJob } from "@/services/jobService";

type ApplicationStatus = Job["application_status"];

const statusStyles: Record<ApplicationStatus, string> = {
  applied: "bg-green-100 text-green-800",
  interview: "bg-yellow-100 text-yellow-800",
  offer: "bg-green-100 text-green-800",
  rejected: "bg-red-100 text-red-800",
  withdrawn: "bg-orange-100 text-orange-800",
  "no response": "bg-gray-500 text-red-300",
};

type Props = {
  job: Job;
  id: string;
};

export default function JobDetails({ job, id }: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const [form, setForm] = useState(job);

   async function handleSave () {
    await updateJob(id, form);
    setIsEditing(false)
   }

  return (
    <div>
      <div className="flex flex-col gap-4 max-w-4xl w-full mx-auto px-4 py-6">
        <Link href={"/jobs"} className="flex text-gray-400 ">
          <span className="material-symbols-outlined">arrow_left_alt</span>
          Back to Applications
        </Link>

        {/* page header */}
        <div className="flex flex-col gap-4">
          {/* job title */}
          <h1 className="text-2xl">
            {isEditing ? (
              <input
                value={form.job_title}
                className="outline-none"
                onChange={(e) =>
                  setForm({
                    ...form,
                    job_title: e.target.value,
                  })
                }
              />
            ) : (
              <p>{form.job_title}</p>
            )}
          </h1>

          {/* company name */}
          <div className="flex flex-wrap items-center gap-2">
            <p className="flex items-center">
              <span className="material-symbols-outlined text-primary/20">
                apartment
              </span>
              {job.company_name}
            </p>
            <div
              className={`px-3 py-1 rounded-full ${statusStyles[form.application_status]}`}
            >
              {isEditing ? (
                <StatusDropdown
                  value={form.application_status}
                  onChange={(status) =>
                    setForm({ ...form, application_status: status })
                  }
                />
              ) : (
                <p>{form.application_status}</p>
              )}
            </div>
          </div>

          {/* buttons */}
          <div className="mt-2 flex gap-3">
            <button
              className="flex border border-gray-400 py-2 px-4 rounded-md bg-white items-center text-sm sm:text-base cursor-pointer"
              onClick={() => setIsEditing(true)}
            >
              <span className="material-symbols-outlined">edit</span>
              Edit
            </button>

            {isEditing && (
              <button
                className="flex border border-gray-400 py-2 px-4 rounded-md bg-primary/20 items-center text-sm sm:text-base"
                onClick={handleSave}
              >
                <span className="material-symbols-outlined">edit</span>
                Save
              </button>
            )}
          </div>

          {/* job notes */}
          <div className="border border-gray-400 bg-white p-3 flex flex-col gap-2 rounded-md">
            <h3 className="text-xl">Notes</h3>
            <p>
              {isEditing ? (
                <textarea
                  value={form.notes ?? ""}
                  className="px-2 outline-none"
                  rows={5}
                  cols={50}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                />
              ) : (
                <p>{form.notes}</p>
              )}
            </p>
          </div>

          <div className="border border-gray-400 bg-white p-3  gap-4 rounded-md">
            <ul className="flex flex-col gap-3">
              {/* applied on */}
              <li className="flex items-start sm:items-center gap-4">
                <span className="material-symbols-outlined text-primary p-3 bg-primary/20 rounded-md">
                  event
                </span>
                <div>
                  <h4 className="text-sm text-gray-400">Applied On</h4>
                  <p className="text-sm">{job.date_applied}</p>
                </div>
              </li>

              {/* job link */}
              <li className="flex items-start sm:items-center gap-4">
                <span className="material-symbols-outlined text-primary p-3 bg-primary/20 rounded-md">
                  open_in_new
                </span>

                <div>
                  <h4 className="text-gray-400 text-sm">
                    Job Application Link
                  </h4>
                  {isEditing ? (
                    <input
                      type="url"
                      value={form.job_url ?? ""}
                      className="border border-outline-variant rounded-md py-1 px-2"
                      onChange={(e) =>
                        setForm({ ...form, job_url: e.target.value })
                      }
                    />
                  ) : (
                    <p className="text-sm">{form.job_url ?? "No Link"}</p>
                  )}
                </div>
              </li>

              {/* job source */}
              <li className="flex items-start sm:items-center gap-4">
                <span className="material-symbols-outlined text-primary p-3 bg-primary/20 rounded-md">
                  topic
                </span>
                <div>
                  <h4 className="text-sm text-gray-400">Job Source</h4>
                  {isEditing ? (
                    <input
                      type="text"
                      value={form.job_source ?? ""}
                      className="border border-outline-variant rounded-md py-1 px-2"
                      onChange={(e) =>
                        setForm({ ...form, job_source: e.target.value })
                      }
                    />
                  ) : (
                    <p className="text-sm">{job.job_source ?? "No Source"}</p>
                  )}
                </div>
              </li>

              {/* follow up date */}
              <li className="flex items-start sm:items-center gap-4">
                <span className="material-symbols-outlined text-primary p-3 bg-primary/20 rounded-md">
                  topic
                </span>
                <div>
                  <h4 className="text-sm text-gray-400">Follow Up Date</h4>
                  {isEditing ? (
                    <input
                      type="date"
                      value={form.follow_up_date ?? ""}
                      className="border border-outline-variant rounded-md py-1 px-2"
                      onChange={(e) =>
                        setForm({ ...form, follow_up_date: e.target.value })
                      }
                    />
                  ) : (
                    <p className="text-sm">{job.follow_up_date}</p>
                  )}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
