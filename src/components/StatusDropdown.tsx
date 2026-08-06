import { Job } from "@/types/job";

type StatusDropdownProps = {
  value: Job["application_status"];
  onChange: (status: Job["application_status"]) => void;
};

export default function StatusDropdown({
  value,
  onChange,
}: StatusDropdownProps) {
  return (
    <select
      value={value}
      className="text-black"
      
      onChange={(e) =>
        onChange(e.target.value as Job["application_status"])
      }
    >
      <option value="applied">Applied</option>
      <option value="interview">Interview</option>
      <option value="offer">Offer</option>
      <option value="rejected">Rejected</option>
      <option value="withdrawn">Withdrawn</option>
      <option value="no response">No Response</option>
    </select>
  );
}