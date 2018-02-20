import React from "react";
import { connect } from "react-redux";
import { addDate, addDateCategory } from "../actions";

class DateInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      description: "",
      categoryId: props.category.id
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.state.description === "")
      return;

    this.props.addDate(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Description:
          <input
            type="text"
            value={this.state.description}
            name="description"
            onChange={this.handleChange}
          />
        </label>
        <label>
          Category:
          <input
            type="text"
            value={this.state.categoryId}
            name="categoryId"
            onChange={this.handleChange}
            disabled="true"
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  // console.log("mapDispatchToProps - mapDispatch:", dispatch);
  return {
    addCategory: category => dispatch(addDateCategory(category)),
    addDate: date => dispatch(addDate(date))
  };
};
export default connect(null, mapDispatchToProps)(DateInput);
