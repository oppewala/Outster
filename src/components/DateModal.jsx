import React from 'react';
import { connect } from 'react-redux';
import { closeDateModal } from '../actions/dateModalActions';

function flatten(a, b) {
    return a.concat(b);
}
class DateModal extends React.Component {
    constructor(props) {
        super(props);

        console.log('DateModal props:', this.props);

        this.state = {
            display: false,
            date: this.props.date,
            status: this.props.status
        };
        console.log(this.state);
    }

    // const DateModal = ({ date }) => {
    // if (!date){
    //     return <div style={{display: 'hidden'}}></div>
    // }
    render() {
        return (
            <div style={{ display: this.state.display ? 'block' : 'hidden' }}>
                <a name={this.state.date.id} onClick={closeDateModal} href="#">
                    Close
                </a>
                <p>Date Modal Reducer: {this.props.status}</p>
                <p>This is the modal</p>
                <p>{this.state.date.description}</p>
                <p>LINK</p>
                <p>Created by: USER</p>
                <p>Added on: DATETIME</p>
                <p>Notes:</p>
                <div className="dates">
                    <ul>
                        <li>
                            27th Feb - somehow view all 'activities' on the 27th
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    // console.log("mapDispatchToProps - mapDispatch:", dispatch);
    return {
        closeDateModal: () => dispatch(closeDateModal())
    };
};
const mapStateToProps = state => {
    console.log('DateModal mapStateToProps', state);

    return {
        date: {
            id: 123,
            description: 'hard coded desc'
        },
        status: state.dateModalReducer
    };
    // return { dates: state.datesReducer, selectedDate: state.dateModalReducer };
};
export default connect(mapStateToProps, mapDispatchToProps)(DateModal);
