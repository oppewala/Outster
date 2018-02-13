import React from 'react'
// import PropTypes from 'prop-types'
import DateCategory from './DateCategory'
import DateInput from './DateInput'
import { connect } from 'react-redux';
import { addDateCategory, addDate } from '../actions/index';

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
const RenderCategories = ({ dates }) => {
    console.log(dates)
    return(
    dates.map(datingCategory => (<DateCategory key={datingCategory.id} category={datingCategory} />))
)}

class DateApp extends React.Component {
    constructor(props) {
        super(props);

        console.log('DateApp props:', this.props)
        this.state = this.props;
        console.log('DateApp state:', this.state)
    }

    handleSubmit(event) {
        console.log('Form submitted', event, this.state)
    }

    render() {
        return(
            <div>
                <h1>Date App</h1>
                <DateInput />
                <RenderCategories dates={this.state.dates} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('mapState:', state);
    return { dates: state.dateAppReducer }
}
const mapDispatchToProps = (dispatch) => {
    console.log('mapDispatch:', dispatch);
    return {
        addCategory: () => dispatch(addDateCategory),
        addDate: () => dispatch(addDate)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DateApp)