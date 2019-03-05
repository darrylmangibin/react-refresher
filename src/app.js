import React from 'react';
import ReactDOM  from 'react-dom';
import AddOption from './components/AddOption';
import Header from './components/Header';
import Action from './components/Action';
import Options from './components/Options';

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: []
    };
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this)
  }

  componentDidMount() {
    
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      if(options) {
        this.setState(() => ({ options }))
      }
    } catch (error) {
      
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }

  handleDeleteOption(optionText) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => option !== optionText)
    }));
  }

  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }

  handleAddOption(option) {
    if(!option) {
      return 'Enter Valid Value to add item';
    } else if(this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }
    this.setState((prevState) => ({ options: prevState.options.concat(option) }));
  }

  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';

    return(
      <div>
        <Header 
          title={title}
          subtitle={subtitle}
        />
        <Action 
          hasOptions={!!this.state.options.length}
          handlePick={this.handlePick}
        />
        <Options 
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption 
          handleAddOption={this.handleAddOption}
        />
      </div>
    )
  }
}

ReactDOM.render(<IndecisionApp />, document.querySelector('#root'));