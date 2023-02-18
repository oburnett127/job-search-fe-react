import {
  json,
  redirect,
} from 'react-router-dom';

import JobItem from '../components/JobItem';
import JobsList from '../components/JobsList';
import {useEffect} from "react";

function JobDetailPage() {
  let job;

  useEffect(() => {
    job = loadJob();
    console.log("jobs page is being rendered");
  }, [] );

  return (
      <JobItem job={job} />
  );
}

export default JobDetailPage;
