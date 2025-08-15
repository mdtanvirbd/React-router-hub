import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineDollar } from "react-icons/ai";
import { Link } from "react-router-dom";
const Job = ({ job }) => {
  const { id, logo,job_title, company_name,remote_or_onsite,location,job_type,salary } = job;
  return (
    <div className=" shadow-lg">
      <figure>
        <img
          src={logo}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p>
            {company_name}
          
        </p>
        <div className="flex gap-2">
            <button className="px-5 py-2 font-extrabold
             border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">{remote_or_onsite}</button>
            <button className="px-5 py-2 font-extrabold
             border rounded border-[#7E90FE] text-[#7E90FE]">{job_type}</button>
        </div>
        <div className="mt-4 flex">
            <h2 className=" flex mr-4"><IoLocationOutline className="text-2xl mr-2s" />{location}</h2>
            <h2 className=" flex "><AiOutlineDollar className="text-2xl " />{salary}</h2>
        </div>
        <div className="card-actions ">
          <Link to={`/job/${id}`}><button className="btn btn-primary">View Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Job;
