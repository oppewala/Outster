import React from "react";
// import PropTypes from 'prop-types'
import DateCategory from "./DateCategory";
import { connect } from "react-redux";

const RenderCategories = ({ dates }) => {
  return dates.map(datingCategory => (
    <DateCategory key={datingCategory.id} category={datingCategory} />
  ));
};

class DateApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props;
  }

  render() {
    return (
      <div>
        <h1>Date App</h1>
        <RenderCategories dates={this.state.dates} />
      </div>
    );
  }
}
// <DateInput /> - This used to be in the render above

const mapStateToProps = state => {
  console.log("DateApp - mapStateToProps:", state);
  return { dates: state.dateAppReducer };
};
// const mapDispatchToProps = (dispatch) => {
//     console.log('mapDispatch:', dispatch);
//     return {
//         addCategory: () => dispatch(addDateCategory),
//         addDate: () => dispatch(addDate)
//     }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(DateApp)
export default connect(mapStateToProps)(DateApp);
