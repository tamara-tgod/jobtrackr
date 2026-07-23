"use server"

export interface Job {
  id: string;
  company_name: string;
  job_title: string;
  date_applied: string ;
  application_status:
    | "applied"
    | "interview"
    | "no response"
    | "offer"
    | "rejected"
    | "withdrawn";
    job_url: string | null
    job_source: string | null
    follow_up_date: string | null
    notes: string | null
    created_at: string
    updated_at: string
}

