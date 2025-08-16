import React, { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeatureJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [datalength, setDataLength] = useState(4);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div className="p-4">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h2 className="text-5xl font-bold mb-2">Feature Jobs: {jobs.length}</h2>
        <p className="text-gray-600">
          Explore thousands of job opportunities with all the information you
          need. It's your future, find it. Manage all your job applications from
          start to finish.
        </p>
      </div>

      {/* Jobs Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center">
        {jobs.slice(0, datalength).map((job) => (
          <div className="w-80"> {/* Card width আরও বড় করা */}
            <Job key={job.id} job={job} />
          </div>
        ))}
      </div>

      {/* Show All Button */}
      {datalength < jobs.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setDataLength(jobs.length)}
            className="btn btn-primary"
          >
            Show All Jobs
          </button>
        </div>
      )}
    </div>
  );
};

export default FeatureJobs;
