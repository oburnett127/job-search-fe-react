import { Suspense } from 'react';
import {
  useRouteLoaderData,
  json,
  redirect,
  defer,
  Await,
} from 'react-router-dom';

import JobItem from '../components/JobItem';
import JobsList from '../components/JobsList';

function JobDetailPage() {
  const { job, jobs } = useRouteLoaderData('job-detail');

  return (
    <>
      <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
        <Await resolve={job}>
          {(loadedJob) => <JobItem job={loadedJob} />}
        </Await>
      </Suspense>
      <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
        <Await resolve={jobs}>
          {(loadedJobs) => <JobsList jobs={loadedJobs} />}
        </Await>
      </Suspense>
    </>
  );
}

export default JobDetailPage;

async function loadJob(id) {
  const response = await fetch('http://localhost:8080/job/get');

  if (!response.ok) {
    throw json(
      { message: 'Could not fetch details for selected job.' },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.job;
  }
}

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

export async function loader({ request, params }) {
  const id = params.jobId;

  return defer({
    job: await loadJob(id),
    jobs: loadJobs(),
  });
}

export async function action({ params, request }) {
  const jobId = params.jobId;
  const response = await fetch('http://localhost:8080/job/get',{
    method: request.method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(jobId)
  });

  if (!response.ok) {
    throw json(
      { message: 'Could not delete job.' },
      {
        status: 500,
      }
    );
  }
  return redirect('/jobs');
}
