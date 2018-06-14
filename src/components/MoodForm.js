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
    render() {
        return (
            <div className='col-6'>
                <form>
                    <textarea 
                        paceholder="Write about what's currently on your mind."
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    >
                    </textarea>
                    <button className='btn btn-lg btn-info'>Add Entry</button>
                </form>
            </div>
        );
    }
}