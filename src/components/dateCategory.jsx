import React from 'react'
import PropTypes from 'prop-types'
import DateList from './DateList'
import DateInput from './DateInput';

const DateCategory = ({ category, openModal }) => {
    var openModalCategory = (e) => {
        openModal(e.target.name, category.id);
    };
    return(
    <div>
        <h2>{category.description}</h2>
        <DateList dates={category.dates} openModal={openModalCategory} />
        <DateInput category={category} />
    </div>
)}

DateCategory.propTypes = {
    dateCategory: PropTypes.shape({
        id: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        dates: PropTypes.array.isRequired
    })
}

export default DateCategory