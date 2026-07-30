"use client"

import { updateJob } from "@/services/jobService"
import { Job } from "@/types/job"
import { useRef, useState } from "react"

type NotesProps = Pick<Job, "id" |"notes">

export default function NotesEditor({ id, notes }: NotesProps){

    const [newNotes, setNewNotes] = useState<Job ["notes"]>(notes)
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")


    const handleChange = (
        e: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        const value = e.target.value


        setNewNotes(value)
        setError("")
        
        if(timeoutRef.current) {
           clearTimeout(timeoutRef.current)
        }

        timeoutRef.current = setTimeout(async () => {
            setLoading(true)
            try {
                await updateJob(id, {notes: value});
            } catch {
                setError("Failed to save notes.")
            } finally {
                setLoading(false)
            }
            
        }, 3000)
        
    }

    return (
        <div>
            <div className="flex flex-col">
                <textarea name="notes" id="notes" rows={4} cols={50}
                value={newNotes ?? ""}
                className="border w-82"
                onChange={handleChange}
                />
            </div>

            {/* show saving feedback */}
          {/* should replace this with a loader */}
          {
            loading && (
                <p>Saving...</p>
            )
          }

          {/* show an error if the update fails */}
          {error && (
            <p>{error}</p>
          )}
        </div>
    )
}