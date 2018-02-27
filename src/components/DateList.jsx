import React from 'react'
import PropTypes from 'prop-types'
import Date from './Date'

const DateList = ({ dates, openModal }) => {
    return(
    <div>
        <ul>
            {dates.map(date => (<Date clickHandler={openModal} key={date.id} {...date} />))}
        </ul>
    </div>
)}

DateList.propTypes = {
    dates: PropTypes.array.isRequired
}

export default DateList