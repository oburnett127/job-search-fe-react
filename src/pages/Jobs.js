import JobsList from '../components/JobsList';
import { useQuery } from 'react-query';
import JobService from "../services/JobService";

function JobsPage() {
  const { data: jobsData, isLoading: isLoadingJobs } = useQuery('jobs', () =>
      JobService.getAllJobs()
  );

  console.log("jobsData is set to ");
  console.log(jobsData);

  const jobs = isLoadingJobs ? [] : Object.keys(jobsData.data || {});

  return (
      <>
        {isLoadingJobs && <p>Loading...</p>}
        {!isLoadingJobs && <JobsList jobs={jobs} />}
      </>
  );
}

export default JobsPage;