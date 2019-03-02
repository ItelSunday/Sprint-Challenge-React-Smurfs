import React, { Component } from 'react';
// import axios from 'axios'
// import { Router } from 'react-router-dom'

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }
  
  addSmurf = e => {
    e.preventDefault()
    // add code to create the smurf using the api
    const newSmurf = {
      name: this.state.name,
      height: this.state.height,
      age: this.state.age,
    }
    this.props.postSmurf(newSmurf);

    
    // axios
    //   .post('http://localhost:3333/smurfs', newSmurf)
    //   .then(res => this.setState ({smurfs: res.data}))

    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm
