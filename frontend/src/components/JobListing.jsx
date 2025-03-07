import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { JobCategories, JobLocations } from "../assets/assets";
import JobCard from "./JobCard";
import { Menu, ChevronLeft, ChevronRight } from "lucide-react"; // Icons

const JobListing = () => {
  const { isSearched, searchFilter, setSearchFilter, jobDetails } =
    useContext(AppContext);
  const [showFilter, setShowFilter] = useState(false);

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 6;

  // Filter State
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedLocations, setSelectedLocations] = useState([]);

  // Function to toggle category filters
  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  // Function to toggle location filters
  const toggleLocation = (location) => {
    setSelectedLocations((prev) =>
      prev.includes(location)
        ? prev.filter((l) => l !== location)
        : [...prev, location]
    );
  };

  // **Updated Filtering Logic**
  const filteredJobs = jobDetails.filter((job) => {
    const titleMatch =
      searchFilter.title === "" ||
      job.title.toLowerCase().includes(searchFilter.title.toLowerCase());

    const locationMatch =
      searchFilter.location === "" ||
      job.location.toLowerCase().includes(searchFilter.location.toLowerCase());

    const categoryMatch =
      selectedCategories.length === 0 ||
      selectedCategories.includes(job.category);

    const locationFilterMatch =
      selectedLocations.length === 0 ||
      selectedLocations.includes(job.location);

    return titleMatch && locationMatch && categoryMatch && locationFilterMatch;
  });

  // Pagination Logic
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container 2xl:px-20 mx-auto flex flex-col lg:flex-row max-lg:space-y-8 py-8">
      {/* Sidebar */}
      <div className="w-full lg:w-1/4 bg-white px-4">
        {/* Burger Icon for Filter Toggle */}
        <button
          onClick={() => setShowFilter((prev) => !prev)}
          className="px-5 py-2 rounded-lg border border-gray-400 lg:hidden flex items-center gap-2 text-gray-700 font-medium transition hover:bg-gray-100"
        >
          <Menu size={20} />
          {showFilter ? "Close" : "Filters"}
        </button>

        {/* Category Filter */}
        <div className={showFilter ? "" : "max-lg:hidden"}>
          <h4 className="font-medium text-lg py-4">Search by Categories</h4>
          <ul className="space-y-4 text-gray-600">
            {JobCategories.map((cat, index) => (
              <li className="flex gap-3 items-center" key={index}>
                <input
                  className="scale-125 accent-blue-600"
                  type="checkbox"
                  checked={selectedCategories.includes(cat)}
                  onChange={() => toggleCategory(cat)}
                />
                {cat}
              </li>
            ))}
          </ul>
        </div>

        {/* Location Filter */}
        <div className={showFilter ? "" : "max-lg:hidden"}>
          <h4 className="font-medium text-lg py-4 pt-14">Search by Location</h4>
          <ul className="space-y-4 text-gray-600">
            {JobLocations.map((loc, index) => (
              <li className="flex gap-3 items-center" key={index}>
                <input
                  className="scale-125 accent-red-600"
                  type="checkbox"
                  checked={selectedLocations.includes(loc)}
                  onChange={() => toggleLocation(loc)}
                />
                {loc}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Job Listing */}
      <section className="w-full lg:w-3/4 text-gray-800 max-lg:px-4">
        <h3 className="font-medium text-3xl py-2">Latest Jobs</h3>
        <p>Get your desired job from top companies</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {currentJobs.length > 0 ? (
            currentJobs.map((job) => <JobCard key={job.id} job={job} />)
          ) : (
            <p className="col-span-full text-gray-500 text-center">
              No jobs found.
            </p>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-8">
            {/* Previous Button */}
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-full flex items-center gap-2 transition font-medium shadow-md ${
                currentPage === 1
                  ? "cursor-not-allowed bg-gray-200 text-gray-500"
                  : "bg-gray-900 text-white hover:bg-gray-700"
              }`}
            >
              <ChevronLeft size={18} />
              Prev
            </button>

            {/* Page Numbers */}
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => paginate(i + 1)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition shadow-md ${
                  currentPage === i + 1
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {i + 1}
              </button>
            ))}

            {/* Next Button */}
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-full flex items-center gap-2 transition font-medium shadow-md ${
                currentPage === totalPages
                  ? "cursor-not-allowed bg-gray-200 text-gray-500"
                  : "bg-gray-900 text-white hover:bg-gray-700"
              }`}
            >
              Next
              <ChevronRight size={18} />
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default JobListing;
