import { Suspense } from 'react';
import { useLoaderData, json, defer, Await } from 'react-router-dom';

import JobsList from '../components/JobsList';

//Not using this page in the app for now

function JobsLoaderPage() {
  const { jobs } = useLoaderData();

  return (
    <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
      <Await resolve={jobs}>
        {(loadedJobs) => <JobsList jobs={loadedJobs} />}
      </Await>
    </Suspense>
  );
}

export default JobsLoaderPage;

async function loadJobs() {
  const response = await fetch('http://localhost:8080/job/list');

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
