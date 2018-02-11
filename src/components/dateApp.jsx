import React from 'react'
// import PropTypes from 'prop-types'
import DateCategory from './DateCategory'
import DateInput from './DateInput'

var dates = [
    { 
        id: 0,
        description: 'Out', 
        dates: [
            { id: 0, description: 'Movies' },
            { id: 1, description: 'Bowling' }
        ] 
    },
    {
        id: 1,
        description: 'Eating',
        dates: [
            { id: 2, description: 'Samurai' },
            { id: 3, description: 'Universal' }
        ]
    }
]
class DateApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {dates: dates};
    }

    handleSubmit(event) {
        console.log('Form submitted', event, this.state)
    }

    renderCategories() {
        return (this.state.dates.map(datingCategory => (<DateCategory key={datingCategory.id} category={datingCategory} />)))
    }

    render() {
        const renderCategories = this.renderCategories();

        return(
            <div>
                <h1>Date App</h1>
                <DateInput />
                { renderCategories }
            </div>
        )
    }
}

export default DateApp