import React, { Component } from 'react';
import axios from "axios";
import { Route, withRouter, NavLink } from "react-router-dom";

import './App.css';
import NavBar from './components/NavBar';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3333/smurfs')
      .then(res => this.setState({ smurfs: res.data }))
      .catch(err => console.log(err));
  }

  postSmurf = (newSmurf) => {
    axios
      .post('http://localhost:3333/smurfs', newSmurf)
      .then(res => this.setState({ smurfs:res.data }, this.props.history.push("/")))
      .catch(err => console.log(err));
  }

  // deleteSmurf = (id) => {
  //   axios.delete(`http://localhost:3333/smurfs/${id}`)
  //     .then(res => this.setState({ smurfs: res.data }, this.props.history.push('/')))
  // }
  
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  render() {
    console.log(this.state.smurfs);
    return (
      <div className="App">
        {/* <SmurfForm postSmurf={this.postSmurf} />
        <Smurfs smurfs = {this.state.smurf} /> */}
        <nav>
          <div>
          <NavBar />
            <NavLink exact to='/'>Village</NavLink>
          </div>
          <div>
            <NavLink to='/smurf-form'>Add New Smurf</NavLink>
          </div>
        </nav>
        <Route 
          exact
          path='/' 
          render={props => <Smurfs {...props} smurfs={this.state.smurfs} />}
        />
        <Route 
          path='/smurf-form' 
          render={props => <SmurfForm {...props} postSmurf={this.postSmurf} />} 
        />
      </div>
    );
  }
}

export default withRouter(App);