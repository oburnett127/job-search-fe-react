import JobsList from '../components/JobsList';
import { useQuery } from 'react-query';
import JobService from "../services/JobService";

function JobsPage() {
  const { data: jobsData, isLoading: isLoadingJobs } = useQuery('jobs', () =>
      JobService.getAllJobs()
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