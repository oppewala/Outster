import React from 'react'

class DateInput extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          id: 0,
          description: ''
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
      console.log('A name was submitted: ', this.state);
      event.preventDefault();
    }
  
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Description:
                    <input type="text" value={this.state.description} name="description" onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default DateInput