import React from 'react';
import { NavLink } from 'react-router-dom';

const AddMoodBtn = () => (
    <div className='col-4'>
        <NavLink className='btn btn-lg btn-info' to='/AddMoodPage'>Add Mood</NavLink>
    </div>
);

export default AddMoodBtn;