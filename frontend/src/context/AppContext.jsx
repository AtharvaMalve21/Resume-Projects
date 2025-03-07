import { createContext, useState,useEffect } from "react";
import { jobsData } from "../assets/assets";

export const AppContext = createContext({});

export const AppContextProvider = ({ children }) => {
  const [searchFilter, setSearchFilter] = useState({
    title: "",
    location: "",
  });
  const [isSearched, setIsSearched] = useState(false);

  const [jobDetails, setJobDetails] = useState([]);

  const fetchJobDetails = () => {
    setJobDetails(jobsData);
  };

  useEffect(() => {
    fetchJobDetails();
  }, []);

  const value = {
    searchFilter,
    setSearchFilter,
    isSearched,
    setIsSearched,
    jobDetails,
    setJobDetails,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
