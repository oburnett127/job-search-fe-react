import JobItem from '../components/JobItem';
import { useQuery } from 'react-query';
import JobService from '../services/JobService';
import { useParams } from 'react-router-dom';

function JobDetailPage() {
  const { jobId } = useParams();

  console.log(jobId);

  const { data: jobData } = useQuery(["job", jobId], () => JobService.getJob(jobId));

  console.log(jobData);

  return <JobItem job={jobData.data} />;
}

export default JobDetailPage;
