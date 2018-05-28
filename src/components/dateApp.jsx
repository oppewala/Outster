import React from 'react';
// import PropTypes from 'prop-types'
import DateCategory from './DateCategory';
import { connect } from 'react-redux';
import DateModal from './DateModal';
import { openDateModal } from '../actions/dateModalActions';

const RenderCategories = ({ dates, openModal }) => {
    return dates.map(datingCategory => (
        <DateCategory
            key={datingCategory.id}
            openModal={openModal}
            category={datingCategory}
        />
    ));
};

class DateApp extends React.Component {
    constructor(props) {
        super(props);
        console.log('DateApp props:', this.props);
        this.state = {
            categories: this.props.dates,
            selectedDate: null
        };

        this.openModal = this.openModal.bind(this);
        console.log(this.openModal);
    }

    openModal(dateId, categoryId) {
        var category = this.state.categories.find(c => c.id == categoryId);
        if (!category || !category.dates)
            console.log(
                'openModal:',
                'Failed to find category with dates',
                categoryId
            );

        var date = category.dates.find(d => d.id == dateId);
        if (!date)
            console.log(
                'openModal:',
                'Failed to find date',
                dateId,
                categoryId
            );

        this.props.openDateModal(dateId);

        this.setState({
            selectedDate: date
        });
    }

    render() {
        return (
            <div>
                <h1>Date App</h1>
                <DateModal date={this.state.selectedDate} />
                <RenderCategories
                    openModal={this.openModal}
                    dates={this.state.categories}
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log('DateApp - mapStateToProps:', state);
    return { dates: state.datesReducer };
};
const mapDispatchToProps = dispatch => {
    console.log('mapDispatch:', dispatch);
    return {
        openDateModal: date => dispatch(openDateModal(date))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(DateApp);
