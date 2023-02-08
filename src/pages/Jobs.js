import { Suspense } from 'react';
import { useLoaderData, json, defer, Await } from 'react-router-dom';

import JobsList from '../components/JobsList';

function JobsPage() {
  return (
    <JobsList jobs={loadedJobs} />
  );
}

export default JobsPage;

async function loadJobs() {
  const response = await fetch('http://localhost:8080/job/list');

  if (!response.ok) {
    throw json(
      { message: 'Could not fetch jobs.' },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.jobs;
  }
}
