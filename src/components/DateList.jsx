import React from 'react'
import PropTypes from 'prop-types'
import Date from './Date'

const DateList = ({ dates }) => (
    <div>
        <ul>
            {dates.map(date => (<Date key={date.id} {...date} />))}
        </ul>
    </div>
)

DateList.propTypes = {
    dates: PropTypes.array.isRequired
}

export default DateList