import React from 'react'
import PropTypes from 'prop-types'
import DateList from './DateList'

const DateCategory = ({ category }) => (
    <div>
        <h2>{category.description}</h2>
        <DateList dates={category.dates} />
    </div>
)

// <ul>
// {dates.map(datingCategory => ({datingCategory.dates.map(date => (<Date description={date.description}>)})}
// </ul>
// <Date description='123' />

DateCategory.propTypes = {
    dateCategory: PropTypes.shape({
        id: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        dates: PropTypes.array.isRequired
    })
}

export default DateCategory