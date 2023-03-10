import { useRouteLoaderData } from 'react-router-dom';
import JobUpdateForm from "../components/JobUpdateForm";

function UpdateJobPage() {
  const data = useRouteLoaderData('job-detail');
  console.log(data);

  return <JobUpdateForm job={data} />;
}

export default UpdateJobPage;
