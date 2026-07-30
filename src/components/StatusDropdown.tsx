"use client"

import { Job } from "@/types/job"
import { useState } from "react"
import { updateJob } from "@/services/jobService"
import { useRouter } from "next/navigation"

type StatusDropdownProps = Pick<Job, "id" |"application_status">

export default function StatusDropdown( {id, application_status}: StatusDropdownProps) {
    const router = useRouter()

    const [status, setStatus] = useState<Job["application_status"]>(application_status)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

// to ensure state and props are always in sync - to be fixed later
    //   useEffect(() => {
    //     if (application_status){
    //     setStatus(application_status)
    // }
    // }, [application_status])  

    const handleChange = async (
        e: React.ChangeEvent<HTMLSelectElement>
    ) => {
        const newStatus = e.target.value as Job["application_status"]

        const prevStatus = status

        setStatus(newStatus)
        setError("")
        setLoading(true)

        try {
            await updateJob(id, {application_status: newStatus})

            // refresh the current route, in this case the parent comp.(JobCard) 
            router.refresh()
  
        } catch (err) {
            console.error(err)

            // if saving fails, return the previous state
            setStatus(prevStatus)

            setError("Failed to update status. Please try again.")
        } finally {
            setLoading(false)
        }
    }
    return (
        <div>
            <div className="flex flex-col">
              <label htmlFor="application_status">Application Status</label>
          <select
            name="application status"
            id="application_status"
            value={status}
            onChange={handleChange}
            disabled={loading}
            className=" border border-gray-500 w-82 py-1.5"
          >
            <option value="applied">Applied</option>
            <option value="interview">Interview</option>
            <option value="no response">No Response</option>
            <option value="offer">Offer</option>
            <option value="rejected">Rejected</option>
            <option value="withdrawn">Withdrawn</option>
          </select>

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
        </div>
    )
}