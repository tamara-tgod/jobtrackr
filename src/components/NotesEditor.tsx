import { updateJob } from "@/services/jobService"
import { Job } from "@/types/job"
import { useRef, useState } from "react"

type NotesProps = Pick<Job, "id" |"notes">

export default function NoteEditor({ id, notes }: NotesProps){

    const [newNotes, setNewNotes] = useState<Job ["notes"]>(notes)
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)


    const handleChange = (
        e: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        const value = e.target.value


        setNewNotes(value)

        if(timeoutRef.current) {
           clearTimeout(timeoutRef.current)
        }

        timeoutRef.current = setTimeout(() => {
            updateJob(id, {notes: value})
        }, 3000)
        
    }

   


    return (
        <div>
            <div>
                <label htmlFor="notes">Notes</label>
                <textarea name="notes" id="notes" rows={4} cols={50}
                value={newNotes ?? ""}
                onChange={handleChange}
                />
            </div>
        </div>
    )
}