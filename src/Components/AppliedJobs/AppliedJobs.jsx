import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplications } from "../../Utility/localStorage";

const AppliedJobs = () => {
  const jobs = useLoaderData(); // সব jobs লোড হচ্ছে
  const [appliedJobs, setAppliedJobs] = useState([]); // applied jobs রাখার state
  const [displayJobs, setDisplayJobs] = useState([]); // display jobs রাখার state

  const handleJobFilter = (filter) => {
    if (filter === "All") {
      setDisplayJobs(appliedJobs);
    } else if (filter === "Remote") {
      const remoteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Remote"
      );
      setDisplayJobs(remoteJobs);
    } else if (filter === "Onsite") {
      const onsiteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setDisplayJobs(onsiteJobs);
    }
  };

  useEffect(() => {
    const storedJobsId = getStoredJobApplications(); // localStorage থেকে applied job IDs আনছি
    if (jobs.length > 0) {
      const jobsApplied = [];
      for (const id of storedJobsId) {
        const job = jobs.find((job) => job.id === parseInt(id));
        if (job) {
          jobsApplied.push(job);
        }
      }
      setAppliedJobs(jobsApplied); // state এ applied jobs সেট করছি
      setDisplayJobs(jobsApplied); // display jobs এও সেট করছি
    }
  }, [jobs]);

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Jobs I applied: {appliedJobs.length}</h2>

      <details className="dropdown relative mb-4">
        <summary className="btn m-1">Filter Jobs</summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-10 w-52 p-2 shadow-sm mt-2">
          <li onClick={() => handleJobFilter("All")}>
            <a>All</a>
          </li>
          <li onClick={() => handleJobFilter("Remote")}>
            <a>Remote</a>
          </li>
          <li onClick={() => handleJobFilter("Onsite")}>
            <a>Onsite</a>
          </li>
        </ul>
      </details>

      <ul>
        {displayJobs.length === 0 ? (
          <p>No jobs applied yet</p>
        ) : (
          displayJobs.map((job) => (
            <li key={job.id} className="border p-2 mb-2 rounded-md">
              <strong>{job.job_title}</strong> — {job.company_name}:{" "}
              {job.remote_or_onsite}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default AppliedJobs;
