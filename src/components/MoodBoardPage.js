import React from 'react';
import MoodChart from './MoodChart';
import ActivityList from './ActivityList';
import AddMoodBtn from './AddMooodBtn';

const MoodBoardPage = () => (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-3'>

            </div>
            <div className='col-6 text-center'>
                <MoodChart />
            </div>
        </div>
        <div className='row'>
            <ActivityList />
            <AddMoodBtn />
        </div>
    </div>  
);

export default MoodBoardPage;