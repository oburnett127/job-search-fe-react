import { Link } from 'react-router-dom';
import classes from './JobsList.module.css';
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';

function JobsList({jobs}) {

    console.log(jobs);

        return (

            <div className={classes.jobs}>
                <h1>All Jobs</h1>
                <ul className={classes.list}>
                    {jobs.map((job) => (
                        <li key={job.id} className={classes.item}>
                            <Link to={{ pathname: `/jobs/${job.id}` }}>
                                <div className={classes.content}>
                                    <h2>{job.title}</h2>
                                    <p>Employer ID: {job.employerId}</p>
                                    <p>Posted on: {job.postDate}</p>
                                </div>
                            </Link>
                        </li>
                    ))}

                </ul>
            </div>

        )
}

export default JobsList;