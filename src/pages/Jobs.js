import JobsList from '../components/JobsList';
import { useQuery } from 'react-query';
import axios from "axios";

function JobsPage() {
  const { data: jobsData, isLoading: isLoadingJobs } = useQuery('jobs',
      () => { return axios.get("http://localhost:8080/job/list");}
  );

  const jobs = isLoadingJobs ? [] : jobsData;

  return (
      <>
        {isLoadingJobs && <p>Loading...</p>}
        {!isLoadingJobs && <JobsList jobs={jobs.data} />}
      </>
  );
}

export default JobsPage;