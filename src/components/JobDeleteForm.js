import React from 'react';
import { useMutation } from 'react-query';
import axios from 'axios';

const JobDeleteForm = ({ jobData }) => {
    const deleteJob = useMutation(
        async () => {
            await axios.delete(`http://localhost:8080/job/delete/${jobData.id}`);
        },
        {
            onSuccess: () => {

            },
            onError: (error) => {

            },
        }
    );

    const handleDelete = () => {
        deleteJob.mutate();
    };

    return (
        <button onClick={handleDelete}>
            Delete Job
        </button>
    );
};

export default JobDeleteForm;
