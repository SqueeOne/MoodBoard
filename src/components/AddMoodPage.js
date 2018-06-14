import React from 'react';
import MoodForm from './MoodForm';

const AddMoodPage = () => (
    <div className='row'>
        <div className='col-3'>
        </div>
        <div className='col-6'>
            <h2>Enter short diary entry and mood</h2>
            <MoodForm />
        </div>
    </div>
);

export default AddMoodPage;