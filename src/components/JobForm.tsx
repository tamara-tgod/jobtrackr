"use client";

import { createJob } from "@/services/jobService";
import { Job } from "@/types/job";
import { useState } from "react";
import { Loader2 } from "lucide-react";

export default function JobForm() {
  // formatted date
  const today = new Date();

  const formattedDate = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, "0"),
    String(today.getDate()).padStart(2, "0"),
  ].join("-");

  // controlled inputs
  const [company_name, setCompany] = useState("");
  const [job_title, setJobTitle] = useState("");
  const [application_status, setApplicationStatus] =
    useState<Job["application_status"]>("applied");
  const [job_url, setJobUrl] = useState("");
  const [job_source, setJobSource] = useState("");
  const [date_applied, setDateApplied] = useState(formattedDate);
  const [follow_up_date, setFollowUpDate] = useState("");
  const [notes, setNotes] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

   function handleCancel() {
    setCompany("");
    setJobTitle("");
    setApplicationStatus("applied");
    setJobUrl("");
    setJobSource("");
    setDateApplied(formattedDate);
    setFollowUpDate("");
    setNotes("");
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setIsSubmitting(true);
    setError("");

    try {
      const job = {
        company_name,
        job_title,
        date_applied,
        application_status,
        job_url: job_url.trim() === "" ? null : job_url,
        job_source: job_source.trim() === "" ? null : job_source,
        follow_up_date: follow_up_date.trim() === "" ? null : follow_up_date,
        notes: notes.trim() === "" ? null : notes,
      };
      await createJob(job);

      // Reset form after successful submission
      handleCancel();

      alert("Job created successfully!");
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="flex flex-col justify-between gap-4 py-4">
      <h1 className="text-primary flex justify-between">
        Add New Job
        <span className="material-symbols-outlined text-gray-600">
          work_history
        </span>
      </h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 p-4 rounded-md border border-gray-500 border-t-4 border-t-primary"
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="company_name">Company Name</label>
          <input
            type="text"
            value={company_name}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="e.g Google, Stripe"
            className=" border border-gray-500"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="job_title">Job Title</label>
          <input
            type="text"
            value={job_title}
            onChange={(e) => setJobTitle(e.target.value)}
            placeholder="e.g Product Designer"
            className=" border border-gray-500"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="application_status">Application Status</label>
          <select
            name="application status"
            id="application_status"
            value={application_status}
            onChange={(e) =>
              setApplicationStatus(e.target.value as Job["application_status"])
            }
            className=" border border-gray-500"
          >
            <option value="select">select status</option>
            <option value="applied">Applied</option>
            <option value="interview">Interview</option>
            <option value="no response">No Response</option>
            <option value="offer">Offer</option>
            <option value="rejected">Rejected</option>
            <option value="withdrawn">Withdrawn</option>
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="job_source">Job Source</label>
          <input
            type="text"
            value={job_source}
            onChange={(e) => setJobSource(e.target.value)}
            placeholder="Indeed"
            className=" border border-gray-500"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="date_applied">Date Applied</label>
          <input
            type="date"
            value={date_applied}
            onChange={(e) => setDateApplied(e.target.value)}
            className=" border border-gray-500"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="application_link">Application Link</label>
          <input
            type="url"
            value={job_url}
            onChange={(e) => setJobUrl(e.target.value)}
            placeholder="https://..."
            className=" border border-gray-500"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="follow_up_date">Follow Up Date</label>
          <input
            type="date"
            value={follow_up_date}
            onChange={(e) => setFollowUpDate(e.target.value)}
            className=" border border-gray-500"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="notes">Notes (optional)</label>
          <textarea
            name="notes"
            id="notes"
            rows={4}
            cols={50}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="border"
          ></textarea>
        </div>

        {error && <p className="text-red-600 text-center">{error}</p>}

        <div className="flex flex-col gap-4 py-8">
          <button
            type="submit"
            disabled={isSubmitting}
            className="border border-gray-500 rounded-full py-1.5 w-80 m-auto"
          >
            {isSubmitting ? (
              <>
                <Loader2 /> Adding Job...
              </>
            ) : (
              "Add Job"
            )}
          </button>

          <button
            type="button"
            onClick={handleCancel}
            className="border border-gray-500 rounded-full py-1.5 w-80 m-auto"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
