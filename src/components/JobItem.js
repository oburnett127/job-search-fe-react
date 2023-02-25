import { Link, useSubmit } from 'react-router-dom';

import classes from './JobItem.module.css';

function JobItem({ job }) {
  // const submit = useSubmit();
  //
  // function startDeleteHandler() {
  //   const proceed = window.confirm('Are you sure?');
  //
  //   if (proceed) {
  //     submit(null, { method: 'delete' });
  //   }
  // }

    console.log("inside jobItem before return $$$$$");
    console.log(job);

  return (
    <article className={classes.job}>
        <h2>{job.title}</h2>
        <h3>{job.employerid}</h3>
        <time>{job.postdate}</time>
        <p>{job.description}</p>
        <menu className={classes.actions}>
            {/* <Link to="edit">Edit</Link>
            <button onClick={startDeleteHandler}>Delete</button> */}
        </menu>
    </article>
  );
}

export default JobItem;