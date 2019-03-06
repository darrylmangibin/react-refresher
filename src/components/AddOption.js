import React from 'react';

class AddOption extends React.Component {
  state = {
    error: undefined
  }
  handeAddOption = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => ({ error }));
    
    if(!error) {
      e.target.elements.option.value = '';
    }    
  }
  render() {
    return (
      <div>
        {
          this.state.error && <p>{this.state.error}</p>
        }
        <form onSubmit={this.handeAddOption}>
          <input type="text" name="option" autoComplete="off" />
          <button className="button">Add Option</button>
        </form>
      </div>
    )
  }
}

export default AddOption;