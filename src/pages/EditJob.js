import { useRouteLoaderData } from 'react-router-dom';

import JobForm from '../components/JobForm';

function EditJobPage() {
  const data = useRouteLoaderData('job-detail');

  return <JobForm method="patch" job={data.job} />;
}

export default EditJobPage;
