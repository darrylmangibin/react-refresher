import React from 'react';

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handeAddOption = this.handeAddOption.bind(this);
    this.state = {
      error: undefined
    }
  }
  handeAddOption(e) {
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
          <button>Add Option</button>
        </form>
      </div>
    )
  }
}

export default AddOption;