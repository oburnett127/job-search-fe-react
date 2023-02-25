import JobsList from '../components/JobsList';
import { useQuery } from 'react-query';
import JobService from "../services/JobService";
import axios from "axios";

function JobsPage() {
  const { data: jobsData, isLoading: isLoadingJobs } = useQuery('jobs',
      //() => JobService.getAllJobs()
      () => { return axios.get("http://localhost:8080/job/list");}
  );

  const jobs = isLoadingJobs ? [] : jobsData.data;

  return (
      <>
        {isLoadingJobs && <p>Loading...</p>}
        {!isLoadingJobs && <JobsList jobs={jobs} />}
      </>
  );
}

export default JobsPage;