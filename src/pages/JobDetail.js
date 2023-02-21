import JobItem from '../components/JobItem';
import { useQuery } from 'react-query';
import JobService from '../services/JobService';
import { useParams } from 'react-router-dom';
import axios from "axios";

function JobDetailPage() {
  const { jobId } = useParams();

  console.log(jobId);

  const { data: jobData } = useQuery('job', () => JobService.getJobById(jobId));

  console.log(jobData);

  return <JobItem job={jobData} />;
}

export default JobDetailPage;
