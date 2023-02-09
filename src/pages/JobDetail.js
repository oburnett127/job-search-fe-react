import {
  json,
  redirect,
} from 'react-router-dom';

import JobItem from '../components/JobItem';
import JobsList from '../components/JobsList';
import {useEffect} from "react";

function JobDetailPage() {
  let job

  useEffect(() => {
    job = loadJob()
    console.log("jobs page is being rendered")
  }, [] )

  return (
      <JobItem job={job} />
  );
}

export default JobDetailPage

async function loadJob(id) {
  const response = await fetch('http://localhost:8080/job/get')

  if (!response.ok) {
    throw json(
      { message: 'Could not fetch details for selected job.' },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json()
    return resData.job
  }
}


export async function action({ params, request }) {
  const jobId = params.jobId
  const response = await fetch('http://localhost:8080/job/get',{
    method: request.method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(jobId)
  });

  if (!response.ok) {
    throw json(
      { message: 'The action could not be completed.' },
      {
        status: 500,
      }
    );
  }
}
