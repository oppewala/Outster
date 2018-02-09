import React, { Component } from 'react'
import PropTypes from 'prop-types'

const Date = ({description}) => (
    <li>{description}</li>
)

Date.propTypes = {
    description: PropTypes.string.isRequired
}

export default Date