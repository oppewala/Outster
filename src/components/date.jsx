import React from 'react'
// import PropTypes from 'prop-types'

const Date = ({id, description, clickHandler}) => (
    <li>{id} - {description} - <a name={id} onClick={clickHandler} href="#">Edit</a> | <a href="#">...</a></li>
)

// Date.propTypes = {
//     date: PropTypes.shape({
//         id: PropTypes.number.isRequired,
//         description: PropTypes.string.isRequired
//     }).isRequired
// }

export default Date