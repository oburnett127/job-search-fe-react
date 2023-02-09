import {useEffect} from 'react'
import {json} from 'react-router-dom';
import JobsList from '../components/JobsList';
function JobsPage() {
  let jobs

  useEffect(() => {
    jobs = loadJobs()
    console.log("jobs page is being rendered")
  }, [] )

  return (
    <JobsList jobs={jobs} />
  );
}

export default JobsPage;

async function loadJobs() {
  const response = await fetch('http://localhost:8080/job/list')

  if (!response.ok) {
    throw json(
      { message: 'Could not fetch jobs.' },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json()
    console.log(resData)
    return resData.jobs
  }
}
