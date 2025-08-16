import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLoaderData, useParams } from 'react-router-dom';
import { saveJobApplication } from '../../Utility/localStorage';

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const job = jobs.find(job => job.id === parseInt(id));
  const idInt = parseInt(id); 

  const handleApplyJobs = () => {
    saveJobApplication(idInt); 
    toast.success(' You have successfully applied for the job!');
  };

  return (
    <div>
      <h2>Job details: {job.job_title}</h2>
      <div className="grid gap-4 md:grid-cols-4">
        <div className="border md:col-span-3">
          <h2 className="text-4xl">Details coming here</h2>
          <p>{job.company_name}</p>
        </div>
        <div className="border">
          <h2 className="text-2xl">Side things</h2>
          <button
            onClick={handleApplyJobs}
            className="btn btn-primary w-full"
          >
            Apply Now
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default JobDetails;
