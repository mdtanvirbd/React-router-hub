import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplications } from "../../utilities/localStorage";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  useEffect(() => {
    const storedJobsId = getStoredJobApplications();
    if (jobs.length > 0) {
      const appliedJobs = jobs.filter((job => storedJobsId.includes(job.id)));
      console.log(appliedJobs);
    }
  }, []);
  return (
    <div>
      <h2>Jobs I applied</h2>
    </div>
  );
};

export default AppliedJobs;
