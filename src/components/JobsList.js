import { Link } from 'react-router-dom';
import classes from './JobsList.module.css';

function JobsList({jobs}) {
  return (
    <div className={classes.jobs}>
      <h1>All Jobs</h1>
      <ul className={classes.list}>
        {jobs.map((job) => (
          <li key={job.id} className={classes.item}>
            <Link to={`/jobs/${job.id}`}>
              <div className={classes.content}>
                <h2>{job.title}</h2>
                <time>{job.postdate}</time>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default JobsList;