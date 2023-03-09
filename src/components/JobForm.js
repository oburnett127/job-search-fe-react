import { Form, useNavigate, useNavigation, useActionData, json, redirect } from 'react-router-dom';
import { useMutation } from 'react-query';
import axios from 'axios';
import classes from './JobForm.module.css';
import {useState} from "react";

function JobForm({ method, job }) {
  const data = useActionData();
  const navigate = useNavigate();
  const navigation = useNavigation();

  const isSubmitting = navigation.state === 'submitting';

  function cancelHandler() {
    navigate('..');
  }

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [result, setResult] = useState('');

  const createJob = useMutation(
      (formData) => axios.post('http://localhost:8080/job/create', formData),
      {
            onSuccess: () => {
              console.log('Job created successfully');
              setResult('Job created successfully');
            },
            onError: () => {
              console.log('An error occurred. Job could not be saved.');
              setResult('An error occurred. Job could not be saved.');
            }
      }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    createJob.mutate({ title, description });
  };

  return (
    <>
      <p>{result}</p>
      <Form method={method} className={classes.form} onSubmit={handleSubmit}>
        {data && data.errors && (
          <ul>
            {Object.values(data.errors).map((err) => (
              <li key={err}>{err}</li>
            ))}
          </ul>
        )}
        <p>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            name="title"
            required
            defaultValue={job ? job.title : ''}
            onChange={(e) => setTitle(e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            rows="5"
            required
            defaultValue={job ? job.description : ''}
            onChange={(e) => setDescription(e.target.value)}
          />
        </p>
        <div className={classes.actions}>
          <button type="button" onClick={cancelHandler} disabled={isSubmitting}>
            Cancel
          </button>
          <button disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Save'}
          </button>
        </div>
      </Form>
    </>
  );
}

export default JobForm;
