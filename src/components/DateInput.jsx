import React from 'react'
import { connect } from 'react-redux'
import { addDate } from '../actions'

class DateInput extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          id: 0,
          description: '',
          categoryId: 1
        };
        console.log('DateInput:', this.props)
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      this.setState({
          [event.target.name]: event.target.value
        });
    }
  
    handleSubmit(event) {
      console.log('A name was submitted: ', this.state, this.props.addDate);
      event.preventDefault();
        this.props.addDate(this.state);
        // this.props.onSubmit(this.state);
      console.log('prevented')
    }
  
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Description:
                    <input type="text" value={this.state.description} name="description" onChange={this.handleChange} />
                </label>
                <label>
                    Category:
                    <input type="text" value={this.state.description} name="description" onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    console.log('mapDispatchToProps - mapDispatch:', dispatch);
    return {
        // addCategory: () => dispatch(addDateCategory),
        addDate: (date) => dispatch(addDate(date))
    }
}
export default connect(null, mapDispatchToProps)(DateInput)