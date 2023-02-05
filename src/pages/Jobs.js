import { Suspense } from 'react';
import { useLoaderData, json, defer, Await } from 'react-router-dom';

import JobsList from '../components/JobsList';

function JobsPage() {
  const { jobs } = useLoaderData();

  return (
    <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
      <Await resolve={jobs}>
        {(loadedJobs) => <JobsList jobs={loadedJobs} />}
      </Await>
    </Suspense>
  );
}

export default JobsPage;

async function loadJobs() {
  const response = await fetch('http://localhost:8080/jobs');

  if (!response.ok) {
    // return { isError: true, message: 'Could not fetch jobs.' };
    // throw new Response(JSON.stringify({ message: 'Could not fetch jobs.' }), {
    //   status: 500,
    // });
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

export function loader() {
  return defer({
    jobs: loadJobs(),
  });
}
