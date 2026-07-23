"use server"

import { createJob } from "@/services/jobService"

export async function createJobAction(formData: FormData) {
    const job = {
            company_name: formData.get("company_name") as string,
    job_title: formData.get("job_title") as string,
    application_status: formData.get("application_status") as
      | "applied"
      | "interview"
      | "no response"
      | "offer"
      | "rejected"
      | "withdrawn",
    date_applied: formData.get("date_applied") as string,
    job_url: formData.get("job_url") as string,
    job_source: formData.get("job_source") as string,
    follow_up_date: formData.get("follow_up_date") as string,
    notes: formData.get("notes") as string,
    };

    await createJob(job)
}