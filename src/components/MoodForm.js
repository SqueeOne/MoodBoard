import React from 'react';

export default class MoodForm extends React.Component {
    state = {
        description: '',
        moodRank: '',
        activities: [],
        createdAt: ''
    };

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    };
    onMoodRankChange = (e) => {
        const moodRank = e.target.value;
        if(moodRank.match(/^\d$/)) {
            this.setState(() => ({ moodRank }));
        }
    };
    render() {
        return (
            <div className='col-6'>
                <form>
                    <textarea 
                        paceholder="Write about what's currently on your mind."
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    >
                    </textarea>
                    <input 
                        type='text'
                        placeholder='Rank your mood from 1 - 10'
                        value={this.state.moodRank}
                        onChange={this.onMoodRankChange}
                    />
                    <button className='btn btn-lg btn-info'>Add Entry</button>
                </form>
            </div>
        );
    }
}