import React from 'react'
import { connect } from "react-redux";
import { closeDateModal } from "../actions/dateModalActions";

class DateModal extends React.Component {
  constructor(props) {
    super(props);

    console.log('DateModal props:', this.props);    

    this.state = {
        display: false,
        date: { id: 123, description: 'fake date' }
    }
  }

    // const DateModal = ({ date }) => {
    // if (!date){
    //     return <div style={{display: 'hidden'}}></div>
    // }
    render() {
        return (<div style={{display: this.state.display ? 'block' : 'hidden'}}>
        <a name={this.state.date.id} onClick={closeDateModal} href="#">Close</a>
        <p>This is the modal</p>
        <p>{this.state.date.description}</p>
        <p>LINK</p>
        <p>Created by: USER</p>
        <p>Added on: DATETIME</p>
        <p>Notes:</p>
        <div className="dates">
            <ul>
                <li>27th Feb - somehow view all 'activities' on the 27th</li>
            </ul>
        </div>
    </div>)
    }
}

const mapDispatchToProps = dispatch => {
    // console.log("mapDispatchToProps - mapDispatch:", dispatch);
    return {
        closeDateModal: () => dispatch(closeDateModal())
    };
};
const mapStateToProps = state => {
    console.log(state);
    return { dates: state.datesReducer, selectedDate: state.dateModalReducer };
};
export default connect(mapStateToProps, mapDispatchToProps)(DateModal);