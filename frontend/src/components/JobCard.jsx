import React from "react";

const JobCard = ({ job }) => {
  return (
    <div className="border p-6 shadow-lg rounded-xl bg-white hover:shadow-xl transition-shadow duration-300">
      {/* Company Logo & Title */}
      <div className="flex items-center gap-4">
        <img
          className="h-12 w-12 object-contain"
          src={job.companyId.image}
          alt={job.companyId.name}
        />
        <div>
          <h4 className="font-semibold text-lg text-gray-800">{job.title}</h4>
          <p className="text-sm text-gray-500">{job.companyId.name}</p>
        </div>
      </div>

      {/* Job Details */}
      <div className="flex items-center gap-3 mt-3">
        <span className="bg-blue-100 text-blue-600 px-4 py-1.5 rounded-lg text-xs font-medium border border-blue-300">
          {job.location}
        </span>
        <span className="bg-red-100 text-red-600 px-4 py-1.5 rounded-lg text-xs font-medium border border-red-300">
          {job.level}
        </span>
      </div>

      {/* Description Preview */}
      <p
        className="text-gray-600 text-sm mt-3 leading-relaxed"
        dangerouslySetInnerHTML={{
          __html: job.description.slice(0, 150) + "...",
        }}
      ></p>

      {/* Action Buttons */}
      <div className="mt-5 flex gap-4">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium transition">
          Apply Now
        </button>
        <button className="text-gray-600 border border-gray-400 hover:bg-gray-100 px-5 py-2 rounded-lg font-medium transition">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default JobCard;
