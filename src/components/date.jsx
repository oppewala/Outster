import React from 'react'
import PropTypes from 'prop-types'

const Date = ({date}) => (
    <li>{date.description}</li>
)

Date.propTypes = {
    date: PropTypes.shape({
        id: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired
    }).isRequired
}

export default Date