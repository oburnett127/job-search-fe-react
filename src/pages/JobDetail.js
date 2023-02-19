import JobItem from '../components/JobItem';
import { useQuery } from 'react-query';
import JobService from '../services/JobService';

function JobDetailPage({ jobId }) {
  const { data: job } = useQuery(["job", jobId], () => JobService.getJob());
  return <JobItem job={job} />;
}

export default JobDetailPage;
