import { Link, useSubmit } from 'react-router-dom';
import classes from './JobItem.module.css';
import EditIcon from "@mui/icons-material/Edit";
import ClearIcon from "@mui/icons-material/Clear";

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

    console.log(job);

  return (

        <article className={classes.job}>
            <h2>{job.title}</h2>
            <h3>{job.employerId}</h3>
            <time>{job.postDate}</time>
            <p>{job.description}</p>
            <menu className={classes.actions}>
                <Link to={{ pathname: `/jobs/${job.id}/edit` }} state={{job: job}}>
                    <EditIcon />
                </Link>
                <Link to={{ pathname: `/jobs/${job.id}/delete` }}>
                    <ClearIcon />
                </Link>
            </menu>
        </article>

  );
}

export default JobItem;