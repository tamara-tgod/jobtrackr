"use server";

import { Job } from "@/types/job";
import { createClient } from "@/utils/supabase/server";

type CreateJob = Omit<Job, "id" | "created_at" | "updated_at">;
export async function createJob(job: CreateJob) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("job_application")
    .insert(job)
    .select()
    .single();

  if (error) {
    console.error("Supabase insert error:", error);
    throw error;
  }

  return data;
}

type UpdateJob = Partial<Omit<Job, "id" | "created_at" | "updated_at">>;
export async function updateJob(id: string, updates: UpdateJob) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("job_application")
    .update(updates)
    .eq("id", id)
    .select()
    .single()

    if (error) throw error

    return data
}


export async function getJobs() {
  const supabase = await createClient()
  const {data, error } = await supabase
  .from("job_application")
  .select("*")
  .order("date_applied", {ascending: false});
  
  
  if (error) {
    throw error
  }

  return data
}