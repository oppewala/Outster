import React from 'react'
// import PropTypes from 'prop-types'
import DateCategory from './dateCategory'

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

const DateApp = () => (
    <div>
        <h1>Date App</h1>
        {dates.map(datingCategory => (<DateCategory key={datingCategory.id} category={datingCategory} />))}
    </div>
)

export default DateApp