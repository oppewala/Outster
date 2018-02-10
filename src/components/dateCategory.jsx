import React from 'react'
import PropTypes from 'prop-types'
import Date from './date'

const DateCategory = ({ category }) => (
    <div>
        <h2>{category.description}</h2>
        <ul>
            {category.dates.map(date => (<Date key={date.id} date={date} />))}
        </ul>
    </div>
)

// <ul>
// {dates.map(datingCategory => ({datingCategory.dates.map(date => (<Date description={date.description}>)})}
// </ul>
// <Date description='123' />

DateCategory.PropTypes = {
    dateCategory: PropTypes.shape({
        id: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        dates: PropTypes.array.isRequired
    })
}

export default DateCategory