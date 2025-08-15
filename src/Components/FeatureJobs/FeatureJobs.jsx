import React, { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeatureJobs = () => {
  const [jobs, setJobs] = useState([]);
  // this is not the best way to load show all data
  const [datalength, setDataLength] = useState(4);
  useEffect(() => {
    fetch("jobs.json") // Replace with your API endpoint
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div>
      <div>
        <h2 className="text-5xl text-center">Feature Jobs:{jobs.length}</h2>
        <p className="text-center">
          Explore thousand of a job oppertunities with all the information you
          need. It's your future, find it. Manage all your job application from
          start to finish.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-6">
        {jobs.slice(0, datalength).map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
      <div className={datalength === jobs.length ? "hidden" : "text-center mt-4"}>
        <button
          onClick={() => setDataLength(jobs.length)}
          className="btn btn-primary"
        >
          Show all jobs
        </button>
      </div>
    </div>
  );
};

export default FeatureJobs;
