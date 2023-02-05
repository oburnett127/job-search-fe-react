import { Link, useSubmit } from 'react-router-dom';

import classes from './JobItem.module.css';

function JobItem({ job }) {
  const submit = useSubmit();

  function startDeleteHandler() {
    const proceed = window.confirm('Are you sure?');

    if (proceed) {
      submit(null, { method: 'delete' });
    }
  }

  return (
    <article className={classes.job}>
      <img src={job.image} alt={job.title} />
      <h1>{job.title}</h1>
      <time>{job.date}</time>
      <p>{job.description}</p>
      <menu className={classes.actions}>
        <Link to="edit">Edit</Link>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
}

export default JobItem;
